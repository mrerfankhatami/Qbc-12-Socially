import type { NotificationTypes } from "../types/NotificationTypes";

export const notifications: NotificationTypes[] = [
  {
    id: "notif-001",
    userId: "user-001",
    creatorId: "user-002",
    postId: "post-101",
    comentId: null,
    type: "LIKE",
    read: false,
    createdAt: "2026-08-11T10:30:00Z",

    creator: {
      id: "user-002",
      name: "Ali Ahmadi",
      image: "https://i.pravatar.cc/150?img=12",
      email: "ali@example.com",
    },

    post: {
      content: "امروز یک پروژه جدید با React شروع کردم 🚀",
    },

    coment: null,
  },

  {
    id: "notif-002",
    userId: "user-001",
    creatorId: "user-003",
    postId: "post-102",
    comentId: "comment-201",
    type: "COMMENT",
    read: false,
    createdAt: "2026-08-11T09:45:00Z",

    creator: {
      id: "user-003",
      name: "Sara Mohammadi",
      image: "https://i.pravatar.cc/150?img=47",
      email: "sara@example.com",
    },

    post: {
      content: "نظرتون درباره این طراحی چیه؟",
    },

    coment: {
      content: "خیلی قشنگ شده، مخصوصاً قسمت کارت‌ها 👌",
    },
  },

  {
    id: "notif-003",
    userId: "user-001",
    creatorId: "user-004",
    postId: null,
    comentId: null,
    type: "FOLLOW",
    read: true,
    createdAt: "2026-08-11T08:20:00Z",

    creator: {
      id: "user-004",
      name: "Reza Karimi",
      image: "https://i.pravatar.cc/150?img=33",
      email: "reza@example.com",
    },

    post: null,
    coment: null,
  },

  {
    id: "notif-004",
    userId: "user-001",
    creatorId: "user-005",
    postId: "post-103",
    comentId: null,
    type: "LIKE",
    read: true,
    createdAt: "2026-08-10T18:15:00Z",

    creator: {
      id: "user-005",
      name: "Mina Hosseini",
      image: "https://i.pravatar.cc/150?img=44",
      email: "mina@example.com",
    },

    post: {
      content: "یادگیری TypeScript واقعاً تجربه جالبی بود.",
    },

    coment: null,
  },

  {
    id: "notif-005",
    userId: "user-001",
    creatorId: "user-006",
    postId: "post-104",
    comentId: "comment-202",
    type: "COMMENT",
    read: false,
    createdAt: "2026-08-10T15:40:00Z",

    creator: {
      id: "user-006",
      name: "Mohammad Rezaei",
      image: "https://i.pravatar.cc/150?img=68",
      email: "mohammad@example.com",
    },

    post: {
      content: "بهترین روش برای مدیریت state در React چیه؟",
    },

    coment: {
      content: "به نظرم React Query برای این پروژه گزینه خوبیه.",
    },
  },

  {
    id: "notif-006",
    userId: "user-001",
    creatorId: "user-007",
    postId: null,
    comentId: null,
    type: "FOLLOW",
    read: false,
    createdAt: "2026-08-10T12:10:00Z",

    creator: {
      id: "user-007",
      name: "Nima Ebrahimi",
      image: "https://i.pravatar.cc/150?img=11",
      email: "nima@example.com",
    },

    post: null,
    coment: null,
  },
];