export interface ServicesType {
  status: "success" | "fail" | "error";
  result: number;
  data: {
    id: number;
    service_id: number;
    title: string;
    description: string;
    lang: "geo" | "eng";
  }[];
}
