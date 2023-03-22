from abc import ABC, abstractmethod

class Creator(ABC):
    @abstractmethod
    def factory_method(self):
        pass

class ConcreteCreator(Creator):
    def factory_method(self, type_of_product:str=None):
        if type_of_product == 'tomato':
            return Tomato()
        if type_of_product == 'cabage':
            return Cabage()
        if type_of_product == None or type_of_product == '':
            print("No type was specified!")

class Product(ABC):
    @abstractmethod
    def operation(self):
        pass
    def greetings_from_product(self):
        print("Oi eu sou um produto!")

class Tomato(Product):
    def __init__(self)->Product:
        self.name = "Tomato"

    def operation(self):
        self.greetings_from_product()
        print("Hi from ", self.get_product_name())

    def get_product_name(self):
        return self.name
    
class Cabage(Product):
    def __init__(self)->Product:
        self.name = "Cabage"

    def operation(self):
        self.greetings_from_product()
        print("Hello from ", self.get_product_name())

    def get_product_name(self):
        return self.name

creator = ConcreteCreator()

product1 = creator.factory_method()

product2 = creator.factory_method("tomato")
product2.operation()

product3 = creator.factory_method("cabage")
product3.operation()
