const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function convertToCSV(sentenceData) {
  let csv = null;

  if (sentenceData) {
    csv = 'sentence,simplified_sentence\n';

    sentenceData.forEach((object) => {
      csv += `${object.sentence};${object.simplifiedsentence}\n`;
    });
  }

  return csv;
}

async function downloadFile(sentenceData, filename, format = 'json') {
  let blob;

  if (format === 'csv') {
    blob = new Blob([sentenceData], { type: 'text/csv;charset=utf-8;' });
  } else {
    const JSONStringData = JSON.stringify(sentenceData);
    blob = new Blob([JSONStringData], {
      type: 'application/json;charset=utf-8;',
    });
  }

  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function getData(format = 'json') {
  const res = await fetch(`${baseUrl}/sentences/simplified/all`);
  const sentenceData = await res.json();

  if (format === 'csv') {
    const csvData = await convertToCSV(sentenceData.sentences);
    await downloadFile(csvData, 'simplified_sentences_data.csv', 'csv');
  } else {
    await downloadFile(
      sentenceData.sentences,
      'simplified_sentences_data.json',
      'json',
    );
  }

  return sentenceData;
}
