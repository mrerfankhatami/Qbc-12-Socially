export type UserProfile = {
  id?: string;
  name?: string;
  email?: string;
  emailVerified?: boolean;
  image?: string ;
  bio?: string | null;
  location?: string | null;
  website?: string | null;
  createdAt?: string;
  updatedAt?: string;
  _count?: {
    followers: number;
    followings: number;
    posts: number;
  };
  followers?: {
    followerId: string;
  }[];
}

export type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  updatedAt: string;

  author: {
    id: string;
    email: string;
    image: string | null;
    name: string;
  };

  likes: {
    userId: string;
  }[];

  comments: {
    id: string;
    content: string;
    author: {
      id: string;
      email: string;
      image: string | null;
      name: string;
    };
    createdAt: string;
  }[];

  _count: {
    likes: number;
    comments: number;
  };
}

export type LikedPost = {
  id: string;
  userId: string;
  postId: string;
  createdAt: string;

  post: {
    id: string;
    authorId: string;
    content: string;
    createdAt: string;
    updatedAt: string;

    author: {
      id: string;
      email: string;
      image: string | null;
      name: string;
    };

    likes: {
      userId: string;
    }[];

    comments: {
      id: string;
      content: string;
      author: {
        id: string;
        email: string;
        image: string | null;
        name: string;
      };
      createdAt: string;
    }[];

    _count: {
      likes: number;
      comments: number;
    };
  };
}