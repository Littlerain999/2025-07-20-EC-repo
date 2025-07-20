require("dotenv").config()

const port = process.env.PORT
const database = process.env.DB
const client = process.env.CLIENT
const admin = process.env.ADMIN
const salts = Number(process.env.SALTS)
const jwt_secret = process.env.JWT_SECRET

const express = require("express")
const mongoose = require("mongoose")
const joi = require("joi")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { Schema, model, Types, models } = mongoose
const { hash, compare } = bcrypt
const { sign, verify } = jwt

module.exports = {
    port, database, client, admin, salts,
    express,
    mongoose, Schema, model, Types, models,
    joi, hash, compare,
    sign, verify, jwt_secret
}