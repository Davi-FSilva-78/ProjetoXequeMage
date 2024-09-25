import pymongo

cliente = pymongo.MongoClient("mongodb://localhost:27017/")

db = cliente["mongoDavi"]

coleção = db["produtos"]

produtos1 = {"nome": "Detergente", "tipo": "Limpeza", "Validade": "sem validade"}
resultado1 = coleção.insert_one(produtos1)

produtos2 = {"nome": "Sabão em Pó", "tipo": "Limpeza", "Validade": "12 meses"}
resultado2 = coleção.insert_one(produtos2)

produtos3 = {"nome": "Desinfetante", "tipo": "Limpeza", "Validade": "24 meses"}
resultado3 = coleção.insert_one(produtos3)

produtos4 = {"nome": "Limpador Multiuso", "tipo": "Limpeza", "Validade": "18 meses"}
resultado4 = coleção.insert_one(produtos4)

produtos5 = {"nome": "Esponja", "tipo": "Limpeza", "Validade": "12 meses"}
resultado5 = coleção.insert_one(produtos5)

produtos6 = {"nome": "Água Sanitária", "tipo": "Limpeza", "Validade": "18 meses"}
resultado6 = coleção.insert_one(produtos6)

produtos7 = {"nome": "Amaciante", "tipo": "Limpeza", "Validade": "24 meses"}
resultado7 = coleção.insert_one(produtos7)

produtos8 = {"nome": "Sabão Líquido", "tipo": "Limpeza", "Validade": "12 meses"}
resultado8 = coleção.insert_one(produtos8)

produtos9 = {"nome": "Pano de Limpeza", "tipo": "Limpeza", "Validade": "6 meses"}
resultado9 = coleção.insert_one(produtos9)

produtos10 = {"nome": "Desengordurante", "tipo": "Limpeza", "Validade": "18 meses"}
resultado10 = coleção.insert_one(produtos10)

produtos11 = {"nome": "Detergente Lava Louças", "tipo": "Limpeza", "Validade": "12 meses"}
resultado11 = coleção.insert_one(produtos11)

produtos12 = {"nome": "Limpa Vidros", "tipo": "Limpeza", "Validade": "18 meses"}
resultado12 = coleção.insert_one(produtos12)

produtos13 = {"nome": "Inseticida", "tipo": "Limpeza", "Validade": "36 meses"}
resultado13 = coleção.insert_one(produtos13)

produtos14 = {"nome": "Desodorizante", "tipo": "Limpeza", "Validade": "12 meses"}
resultado14 = coleção.insert_one(produtos14)

produtos15 = {"nome": "Limpador de Piso", "tipo": "Limpeza", "Validade": "24 meses"}
resultado15 = coleção.insert_one(produtos15)

produtos16 = {"nome": "Removedor de Manchas", "tipo": "Limpeza", "Validade": "18 meses"}
resultado16 = coleção.insert_one(produtos16)

produtos17 = {"nome": "Limpador de Banheiro", "tipo": "Limpeza", "Validade": "12 meses"}
resultado17 = coleção.insert_one(produtos17)

produtos18 = {"nome": "Limpa Fogão", "tipo": "Limpeza", "Validade": "6 meses"}
resultado18 = coleção.insert_one(produtos18)

produtos19 = {"nome": "Borrifador", "tipo": "Limpeza", "Validade": "sem validade"}
resultado19 = coleção.insert_one(produtos19)

produtos20 = {"nome": "Pó de Limpeza", "tipo": "Limpeza", "Validade": "12 meses"}
resultado20 = coleção.insert_one(produtos20)

produtos21 = {"nome": "Limpador de Carpete", "tipo": "Limpeza", "Validade": "24 meses"}
resultado21 = coleção.insert_one(produtos21)

produtos22 = {"nome": "Limpador de Teto", "tipo": "Limpeza", "Validade": "18 meses"}
resultado22 = coleção.insert_one(produtos22)

produtos23 = {"nome": "Solução de Limpeza", "tipo": "Limpeza", "Validade": "12 meses"}
resultado23 = coleção.insert_one(produtos23)

produtos24 = {"nome": "Cloro", "tipo": "Limpeza", "Validade": "18 meses"}
resultado24 = coleção.insert_one(produtos24)

produtos25 = {"nome": "Removedor de Ferrugem", "tipo": "Limpeza", "Validade": "24 meses"}
resultado25 = coleção.insert_one(produtos25)

produtos26 = {"nome": "Limpa Pratos", "tipo": "Limpeza", "Validade": "12 meses"}
resultado26 = coleção.insert_one(produtos26)

produtos27 = {"nome": "Limpador de Janelas", "tipo": "Limpeza", "Validade": "18 meses"}
resultado27 = coleção.insert_one(produtos27)

produtos28 = {"nome": "Detergente para Roupas", "tipo": "Limpeza", "Validade": "12 meses"}
resultado28 = coleção.insert_one(produtos28)

produtos29 = {"nome": "Limpa Cimento", "tipo": "Limpeza", "Validade": "6 meses"}
resultado29 = coleção.insert_one(produtos29)

produtos30 = {"nome": "Mr. Musculo", "tipo": "Limpeza", "Validade": "6 meses"}
resultado29 = coleção.insert_one(produtos30)

