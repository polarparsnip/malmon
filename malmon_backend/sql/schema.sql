CREATE TABLE public.users (
  id serial primary key,
  username VARCHAR(64) NOT NULL UNIQUE,
  email VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL,
  admin BOOLEAN DEFAULT false,
  completedSentences INTEGER DEFAULT 0,
  completedVerifications INTEGER DEFAULT 0,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp
);

CREATE TABLE public.sentences (
  id SERIAL PRIMARY KEY,
  sentence TEXT NOT NULL,
  simplified BOOLEAN DEFAULT false,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.simplifiedSentences (
  id SERIAL PRIMARY KEY,
  userId INTEGER NOT NULL,
  sentenceId INTEGER,
  simplifiedSentence TEXT NOT NULL,
  rejected BOOLEAN DEFAULT false,
  verified BOOLEAN DEFAULT false,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_originalSentence FOREIGN KEY (sentenceId) REFERENCES sentences (id)
);

CREATE INDEX idx_userId ON public.simplifiedSentences (userId);