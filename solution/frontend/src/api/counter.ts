import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/counters",
});

export async function loadCounters() {
  const res = await api.get("/");
  return res.data;
}

export async function addCounter(name: string) {
  const res = await api.post("/", { name });
  return res.data; // returns {_id, name, value}
}

export async function updateCounter(id: string, newValue: number) {
  const res = await api.patch(`/${id}`, { newValue });
  return res.data;
}

export async function deleteCounter(id: string) {
  await api.delete(`/${id}`);
}
