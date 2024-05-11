# MALMON: A CROWDSOURCING PLATFORM FOR ATS

This repo presents Malmon, a language-independent and open-source website for collecting training data for automatic text simplification models. ATS aims to automatically reduce the linguistic complexity of text to aid individuals with reading difficulties, such as those with cognitive disorders, dyslexia, children, and non-native speakers. The effectiveness of ATS not only facilitates improved reading comprehension among these groups but can also enhance the preprocessing stage for various NLP tasks through summarization, contextual simplification, and paraphrasing.

In order to train models that can perform this task automatically, it is fundamental to have access to extensive parallel corpora in which complex sentences are paired with their simplified versions. Our platform focuses on generating parallel complex-simple sentence pairs via crowdsourcing. The users of our platform are presented with three options, to simplify, verify or download the data that's being collected. This straight-forward navigation leaves little room for confusion as to what is expected of the users, particularly crowdworkers that might not have previous experience with work in NLP. Our platform may prove especially useful for lower-resource languages where the number of expert annotators might be scarce and priority must be placed on straight-forward solutions aimed at the general public. Researchers interested in using the platform can access the source code and modify it freely.

## Installation:

To install Malmon, the following steps are needed:

Install node modules for both backend and frontend code - go into both the respective folders and run:

```bash
npm run install
```

### Backend Setup

To run server locally PostgreSQL needs to be set up.

Then, to run server in development mode you need a .env file with the following information:
DATABASE_URL=postgres://postgres:@localhost/malmon **# path to database**\
PGPASSWORD=password **# where password is the password for the database**\

Then run the following commands:

```bash
createdb malmon # create database in postgres
npm run setup # sets up the database
npm run dev  # runs server development mode on localhost
```

### Frontend Setup

To run site in development you need a .env.local file with the following information:
NEXT_PUBLIC_API_URL=**url path to web server** **# path is http://localhost:3000 if server is running locally on port 3000**

Then run the following command:

```bash
npm run dev # runs development mode
```

Open [http://localhost:3000](http://localhost:3000) in a browser to view the site. Or open [http://localhost:3001](http://localhost:3001) if server is being hosted on port 3000.

## How Malmon works:

The platform is built as a full-stack website utilizing a SQL database set up with PostgreSQL to store all sentences and user data. The back-end web server is built in Javascript utilizing Express.js to handle http connections and the front-end of the website is made using Next.js, which is a React-based Javascript framework. When a user is logged in, the server checks if they are an admin or a general user and redirects them to the appropriate section of the site. The server makes sure that general users can't access any of the admin areas and that a logged in admin has access to all necessary admin functionalities.

User registration and login on the site are straightforward. Users are required to enter a username, e-mail, and password when they register an account. Since user accounts are tied to each individual user's progress, it is important to be able to recover an account in the event that a user loses their password. Tying e-mail addresses to user accounts could also possibly help to distinguish between different users if the need arises, for instance to detect outliers that may be the result of system spamming.

The language of the platform can be chosen with one environment variable when setting it up for hosting, with current supported languages being: Icelandic, English, Norwegian, Danish, Swedish, Faroese, and Italian (note that the proposed guidelines are only available in Icelandic and English as they appear in this repo. The other languages have been translated using ChatGPT and thus require further review). Additionally, adjusting existing language settings or adding more supported languages is a straightforward process that only involves modifying one file.

### Functionality:

When not logged in, site visitors are presented with a simple website with a front page detailing how the platform works. In the footer, they have the option to log in or to register a new account. In the navigation menu, they again have two options: to log in and to get data. The latter option is the only functionality available to users when they are not logged in, apart from actions such as creating a new account or signing in. This option allows visitors to the platform to fetch the current state of the resulting dataset as either a JSON or CSV file, with the files containing complex-simplified sentence pairs. This means that the dataset being collected at each given time is open to everyone who wishes to use it for model training or other similar purposes.

Once logged in, users still see the option to download the dataset but are also presented with options in the navigation menu that are only visible to logged in users. They now see options for navigating to their _account_ section and a _score-table_ section. They are also presented with the option to go to an FAQ page detailing the guidelines for submitting sentences and the options to go to the _simplify_ and the _verify_ sections. These two last sections are the main areas in which users contribute to the dataset being collected on the platform.

Once users navigate to the _simplify_ section, they are given a random sentence from the database and a fast and simple CAPTCHA-like task to verify that they are a human and not a bot. After completing the task, they are presented with an input text field in which they can enter a simplified version of the sentence they were given. This CAPTCHA-like task makes sure sentences are being submitted by humans and prevents bots and/or other spam methods from being able to submit sentences. Once the user feels like they have entered a good enough simplified version of the sentence they received, they can click submit and the sentence is then saved in the database.

When a simplified sentence submitted by a user is saved in the database, it is marked as unverified and is therefore not yet part of the dataset which can be downloaded. To be included in the dataset, a submitted sentence must first be verified by a separate user on the platform which is the purpose of the _verify_ section. Once users navigate to that section, they are again given a sentence along with a simplified version of that sentence submitted by another user. After completing the same CAPTCHA-like task, they are presented with two buttons, a "confirm" button and a "reject" button. If a user feels like the simplification submitted by another user is a good representation of the original sentence, they can approve it by pressing the "confirm" button. If they feel like the simplified version is not a good representation of the original sentence, they can reject it by pressing the "reject" button. If a simplified sentence is confirmed by the user, it is marked as _verified_ and is now part of the collected dataset which people can download. If it is rejected, it is taken out of circulation and will no longer appear to users.

These two sections form the data collection portion of the platform and are the main ways users interact with the website.

### Gamification:

In our site's navigation menu, all users can access a _score-table_ that details which users have contributed the most in terms of submitted simplified sentences and the amount of submitted sentence verifications. Users are ranked based on the lower of the two aforementioned attributes, so if a user has, for example, submitted 33 simplified sentences and verified 22 sentences, they will be ranked based on the number 22. This guarantees that users can't focus exclusively on one method in order to receive a good score, instead providing incentive to contribute to both areas in order to boost their ranking on the scoreboard.

In the _account_ section, users can view their information which includes their username, as well as how many sentences they have submitted and how many sentence verifications they have completed. Also contained in the _account_ section is a digital pet tied to their account that grows according to their sentence submissions and sentence verifications, based on the same system as the scoreboard. When a user has only just created an account and not yet taken any action, the digital pet appears as an egg. As they contribute to the platform, their pet evolves into higher stages similar to creatures in franchises like Pokémon or Digimon.

These features encourage and reward users for their contributions to the platform and can act as a basis for other reward systems which could then be integrated with them. For instance, the fully evolved pet could be accompanied by a lottery ticket in the form of a QR code where a diligent user gains the chance to win a real-world price. Adding an image to the last stage of the pet is straightforward and only involves adding two environment variables when the platform is set up in hosting. Since users have to confirm they are human before submitting sentences, it will be difficult to try to cheat the system to gain whatever rewards are in place.

###Admin Functionality:

One of the key focus points for the platform was to have extensive and user friendly admin functionality. When an admin is logged in, they have instant access to the admin dashboard. This dashboard allows an admin to access the editor areas for sentences, simplified sentences, and users.

In the _sentences_ area, an admin can view all the saved sentences from the database. The sentences are displayed 10 at a time with the option to move forward to the next 10 sentences. Each sentence is displayed individually with an option to update that specific sentence or delete it, so if an admin notices a sentence containing errors or one that should not be there, they have the option to react accordingly. There is also a form on the page where an admin can register a new sentence and add it to the list of complex sentences.

In the _simplified sentences_ area, an admin can view all the simplified sentences that have been submitted, 10 at a time. The simplified sentences are all individually displayed with information on whether the sentence has been confirmed or denied by another user. They are also displayed with options for an admin to either delete the sentence or delete a user rejection. An admin may delete a user rejection when they feel like a simplified sentence was unjustly rejected, and so by deleting the rejection it re-enters circulation and awaits confirmation by a user.

In the _user_ area, an admin can view a list of all registered users on the website, again 10 at a time. The username and registration date of each user is displayed, as well as the number of simplified sentences the user has submitted and the number of verifications the user has completed. For each listed user, an admin is given the option to delete that particular user.

Then, in the _upload_ area, an admin can upload a CSV file containing a list of complex sentences they wish to add to the database of the platform. These sentences will then be added to the collection of complex sentences on the platform that users are presented with.

In addition to these functionalites, an admin can also access all normal user pages and interact with the page as a user would.

## License:

Malmon is released under [the Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

## Citation:

If you use Malmon in your research, please cite our paper:

Helgi Björn Hjartarson and Steinunn Rut Friðriksdóttir. 2024. Malmon: A Crowd-Sourcing Platform for Simple Language. In Proceedings of the 3rd Workshop on Tools and Resources to Empower People with REAding DIfficulties (READI), Torino, Italy. European Language Resources Association.
