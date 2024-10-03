import { RequestHandler } from "express";
import prisma from "../config/prisma";

export const createCompany: RequestHandler = async (req, res, next) => {
  try {
    const company = await prisma.company.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getAllCompany: RequestHandler = async (req, res, next) => {
  try {
    const company = await prisma.company.findMany({
      select: {
        name: true,
        website: true,
        jobs: {
          select: {
            image: true,
          },
        },
      },
    });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getOneCompany: RequestHandler = async (req, res, next) => {
  try {
    const company = await prisma.company.findUnique({
      where: {
        companyId: req.params.id,
      },
    });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const updateCompany: RequestHandler = async (req, res, next) => {
  try {
    const company = await prisma.company.update({
      data: {
        ...req.body,
      },
      where: {
        companyId: req.params.id,
      },
    });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteCompany: RequestHandler = async (req, res, next) => {
  try {
    const company = await prisma.company.delete({
      where: {
        companyId: req.params.id,
      },
    });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json(error);
  }
};
