export interface BlogType {
  status: "success" | "fail" | "error";
  data: {
    _id: string;
    title: string;
    image: {
      public_id: string;
      url: string;
    };
  };
}

export interface BlogsType {
  status: "success" | "fail" | "error";
  result: number;
  data: {
    _id: string;
    title: string;
    image: {
      public_id: string;
      url: string;
    };
  }[];
}
