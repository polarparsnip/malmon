export type LinksProps = {
    self: {
      href: string;
    };
    prev?: {
      href: string;
    };
    next?: {
      href: string;
    };
};

export type Query = {
    offset: number;
    limit: number;
}

export type Sentence = {
    id: number;
    sentence: string;
    simplified: boolean;
}

export type Sentences = {
    _links: LinksProps;
    sentences: Array<Sentence>;
}

export type SimplifiedSentence = {
    id: number;
    simplifiedsentence: string;
    originalsentence: string;
    userid: number;
    rejected: boolean;
    verified: boolean;
    created: string;
}

export type SimplifiedSentences = {
    _links: LinksProps;
    simplifiedSentences: Array<SimplifiedSentence>;
}

export type User = {
    id: number;
    username: string;
    email: string;
    admin: boolean;
    completedsentences: number;
    completedverifications: number;
    created: string;
};

export type Users = {
    _links: LinksProps;
    users: Array<User>;
}

export type UserInfo = {
    token: string;
    expiresIn: number;
    user: User;
};

export type PagingProps = {
    // limits: number;
    // offset: number;
    items?: Array<Sentence> | Array<User>;
    _links: LinksProps;
};