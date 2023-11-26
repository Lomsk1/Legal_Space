export interface AttorneysTypes {
  status: "success" | "fail" | "error";
  result: number;
  data: {
    id: number;
    attorney_id: number;
    title: string;
    description: string;
    lang: "geo" | "eng";
    name: string;
    instagram: null | string;
    facebook: null | string;
    linkedin: null | string;
    image?: {
      public_id: string;
      url: string;
    };
  }[];
}
