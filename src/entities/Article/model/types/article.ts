import { User } from "entities/User";

export enum ArticleBlockType {
  CODE = "CODE",
  TEXT = "TEXT",
  IMAGE = "IMAGE",
}
export enum ArticleView {
  SMALL = "small",
  LARGE = "large",
}
export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}
export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleTextBlock
  | ArticleImageBlock;
export enum ArticleTypes {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}
export interface Article {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypes[];
  blocks: ArticleBlock[];
}
