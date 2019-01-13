
const Type = use('App/Models/Type');
class Product {

    static async findAllProducts() {
        const resultProduct = await this.all()
        return resultProduct
    }

    static async findByProductsId(id){
        const  result = await this.findByOrFail('name',id)
        return result;
    }

    static async updateByProductsId(params) {
        const {id, update_id} = params

        const result = await this.findByOrFail('name',id)
        result.merge({name:update_id})
        result.save()

        return result
    }

    static async createByProductsId(params){
        const {id, price, type_name, user_name} = params

        const type_id = await Type.pair('name', 'id')
        console.log(type_id.type_name)
        const  result = await this.findOrCreate({name: id, price: price, type_id: type_id.type_name})
        /*const {id} = params
        return result*/
    }

    /*

    static async createByTypesId(params){
        const {id} = params
        const  result = await this.findOrCreate({name: id})
        return result
    }

    static async deleteByTypesId(id,response){
        const result = await this.findByOrFail({name: id});
        await result.delete();

        return response.json({msg: 'Ok'});
    }*/

}


module.exports = Product;