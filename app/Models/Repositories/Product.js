class Product {
    static async findAllProducts() {
        const result = await this.all()
        return result
    }

    static async findByProductsId(id) {
        const  find_product = await this.findOrFail(id)
        const result  = await find_product.attributes().fetch()

        return result;
    }

    static async updateByProductsId(params) {
        const {id, update_id} = params

        const  find_product = await this.findOrFail(id)
        find_product.merge({name:update_id})
        find_product.save()

        const result  = await find_product.attributes().fetch()

        return result
    }

    static async createByProductsId(params){
        const {name} = params
        await this.create(params)

        const  find_result = await this.findByOrFail('name', name)
        const relation_result  = await find_result.attributes().fetch()


        return relation_result
    }

    static async deleteByProductsId(id,response){
        const result = await this.findOrFail(id);
        await result.delete();

        return response.json({msg: 'Ok'});
    }

}


module.exports = Product;