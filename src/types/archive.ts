type RaindropUser = {
  $ref: string;
  $id: number;
};

type RaindropCollection = {
  $ref: string;
  $id: number;
  oid: number;
};

type RaindropCreatorRef = {
  _id: number;
  name: string;
  avatar: string;
  email: string;
};

export type Raindrop = {
  _id: number;
  link: string;
  title: string;
  excerpt: string;
  note: string;
  type: string;
  user: RaindropUser;
  cover: string;
  tags: string[];
  important: boolean;
  removed: boolean;
  created: string;
  collection: RaindropCollection;
  lastUpdate: string;
  domain: string;
  creatorRef: RaindropCreatorRef;
  sort: number;
  collectionId: number;
};

export type CollectionRaindrops = {
  result: boolean;
  items: Raindrop[];
};

export type RaindropTag = {
  _id: string;
  count: number;
};

export type CollectionInfo = {
  result: boolean;
  item: {
    _id: number;
    access: {
      for: number;
      level: number;
      root: boolean;
      draggable: boolean;
    };
    author: boolean;
    collaborators: {
      $id: string;
    };
    color: string;
    count: number;
    cover: Array<string>;
    created: string;
    expanded: boolean;
    lastUpdate: string;
    public: boolean;
    sort: number;
    title: string;
    user: {
      $id: number;
    };
    view: string;
  };
};
