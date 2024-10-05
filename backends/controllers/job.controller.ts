import prisma from "../config/prisma";
import { RequestHandler } from "express";

export const createJob: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.job.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getAllJob: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.job.findMany({
      include: {
        company: {
          select: {
            name: true,
          },
        },
        location: {
          select: {
            country: true,
          },
        },
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneJob: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.job.findUnique({
      where: {
        jobId: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const updateJob: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.job.update({
      where: {
        jobId: req.params.id,
      },
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteJob: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.job.delete({
      where: {
        jobId: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
