class Product {
    static async findAll({ filters = null, order = 'id', sort = 'desc'}) {
        const filtersFields = ['type_id', 'user_id', 'name'];
        return this.query().where(function(){
            if(filters && typeof filters === 'object'){
                Object.keys(filters).map(field => {
                    if(filtersFields.includes(field)){
                        this.where(field, filters[field])
                    }
                })
            }
        })
            .orderBy(order, sort)
            .fetch();
    }

    static async findById(id) {
        const find_product = await this.findOrFail(id)
        await find_product.loadMany(['attributes', 'type', 'users'])

        return find_product
    }

    static async updateById({id, params, attr}) {
        const result = await this.findOrFail(id)
        result.merge(params)
        await result.save()
        await result.attributes().pivotQuery().where('attribute_id', attr).update({value: attr})
        await result.loadMany(['attributes', 'type', 'users'])

        return result
    }

    static async createNew({data, attr}){
        const  result = await this.create(data)
        await result.attributes().attach(attr, row => {
            row.value = attr;
        })
        return result
    }

    static async deleteById(id){
        const result = await this.findOrFail(id);
        await result.delete();

        return result
    }

}


module.exports = Product;