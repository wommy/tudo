import express, { Request, Response, NextFunction } from 'express'
import layout from './views/layout'
// import { html, HTML } from "@leafac/html"
// import { Database, sql } from '@leafac/sqlite'

// const db = new Database('src/database/technomad.db')

const app = express()
app.use(express.urlencoded({ extended: false }))
const PORT = 8000

app.get( '/', ( req:Request,res:Response )=> res.send(layout()))
app.post( '/', ( req:Request,res:Response )=> res.send(req.body))

app.listen( PORT, () => console.log(`express running on port:${PORT}`));