export interface AttorneysTypes {
  status: "success" | "fail" | "error";
  result: number;
  data: {
    _id: string;
    title: string;
    description: string;
    lang: "geo" | "eng";
    name: string;
    attorney_id: {
      instagram?: string;
      facebook?: string;
      linkedin?: string;
      _id: string;
      image?: {
        public_id: string;
        url: string;
      };
    };
  }[];
}
