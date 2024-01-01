import { EntityState } from "@reduxjs/toolkit";
import { User } from "entities/User";

export interface Comment {
  id: string;
  text: string;
  user: User;
}
export interface CommentSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
