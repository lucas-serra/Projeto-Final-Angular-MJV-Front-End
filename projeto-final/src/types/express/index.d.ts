import express from "express";
import { DebugLoggerFunction } from "util";
import { FuncionarioDao } from "../../infra";
import { db } from '../config/database';

declare global {
  namespace Express {
    interface Request {
      funcionario?: FuncionarioDao,
      db?: db;
    }
  }
}