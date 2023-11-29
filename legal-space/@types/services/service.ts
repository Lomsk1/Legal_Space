export interface ServicesType {
  status: "success" | "fail" | "error";
  result: number;
  data: {
    _id: string;
    service_id: string;
    title: string;
    description: string;
    lang: "geo" | "eng";
  }[];
}
