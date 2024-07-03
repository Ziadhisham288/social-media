import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("facebook", "root" , "" , {
  host: "localhost",
  dialect: "mysql"
})

const connectionDB = async () => {
  return await sequelize.sync({alter: false , force : false }).then(() => {
    console.log("Database connection is successful!")
  }).catch((error) => {
    console.log({Message : "Error" , error})
  }) 
}


export default connectionDB;