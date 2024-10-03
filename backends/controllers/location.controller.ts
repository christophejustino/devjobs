import prisma from "../config/prisma";
import { RequestHandler } from "express";

export const createLocation: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.location.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getAllLocation: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.location.findMany({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneLocation: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.location.findUnique({
      where: {
        locationId: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const updateLocation: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.location.update({
      where: {
        locationId: req.params.id,
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
export const deleteLocation: RequestHandler = async (req, res, next) => {
  try {
    const result = await prisma.location.delete({
      where: {
        locationId: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
