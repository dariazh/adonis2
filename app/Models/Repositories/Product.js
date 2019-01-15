class Product {
    static async findAll() {
        const results = await this.all()
        for (let result of results.rows) {
            await result.loadMany(['attributes', 'type', 'users'])
        }

        return results.toJSON()
    }

    static async findById(id) {
        const find_product = await this.findOrFail(id)
        await find_product.loadMany(['attributes', 'type', 'users'])

        return find_product
    }

    static async updateById(id, params) {
        const  result = await this.findOrFail(id)
        result.merge(params)
        await result.save()
        await result.loadMany(['attributes', 'type', 'users'])

        return result
    }

    static async createNew(params){
        const  result = await this.create(params)
        await result.loadMany(['attributes', 'type', 'users'])

        return result
    }

    static async deleteById(id){
        const result = await this.findOrFail(id);
        await result.delete();

        return result
    }

}


module.exports = Product;