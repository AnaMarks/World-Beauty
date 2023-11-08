import { Sequelize } from "sequelize"; 
 
const db = new Sequelize('atv', 'root', 'root',{  
    host: 'localhost', 
    dialect:'mysql' 
}); 
 
export default db; 