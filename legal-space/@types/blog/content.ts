export interface BlogContentType {
  status: "success" | "fail" | "error";
  data: {
    title: string;
    description: string;
    lang: "eng" | "geo";
    created_at: Date;
    blog_id: {
      image: {
        public_id: string;
        url: string;
      };
      _id: string;
    };
    _id: string;
    blogText: string;
  };
}

export interface BlogsContentType {
  status: "success" | "fail" | "error";
  result: number;
  data: {
    title: string;
    description: string;
    lang: "eng" | "geo";
    created_at: Date;
    blog_id: {
      image: {
        public_id: string;
        url: string;
      };
      _id: string;
    };
    _id: string;
    blogText: string;
  }[];
}
