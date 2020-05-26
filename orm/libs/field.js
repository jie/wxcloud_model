

class Field {
    constructor(value, options={}) {
        this.value = value
        this.defaultValue = options.defaultValue
    }
}



class IdField extends Field {
    constructor(value, options={}) {
        super(value, options)
    }
}

class StringField extends Field {
    constructor(value, options={}) {
        super(value, options)
    }
}

class NumberField extends Field {

}

class BooleanField extends Field {

}

class NullField extends Field {

}

class ArrayField extends Field {

}

class ObjectField extends Field {

}

class DateField extends Field {

}


class GeopointField extends Field {

}


module.exports = {
    Field: Field,
    IdField: IdField,
    StringField: StringField,
    NumberField: NumberField,
    BooleanField: BooleanField,
    NullField: NullField,
    ArrayField: ArrayField,
    ObjectField: ObjectField,
    DateField: DateField,
    GeopointField: GeopointField
}