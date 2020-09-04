type ID = number | string;

const userId: ID = 5;
const postId: ID = "ahgjgRjkDkkS";

type Coords = [number, number];
const coordinates: Coords = [50.5584, 40.204];

type ReqStatus = "request" | "success" | "error";
const requestStatus: ReqStatus = "success";

type CellSize = 2 | 4 | 8 | 16;
const cell: CellSize = 4;

console.log(userId, postId, coordinates, requestStatus, cell);

export {};
