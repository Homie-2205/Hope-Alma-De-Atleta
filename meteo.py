# Crear un diccionario para almacenar los nombres y las edades
personas = {
    "Andrea": 23,
    "Maira": 34,
    "Caren": 36
}

# Mostrar la información en la consola
for nombre, edad in personas.items():
    print(f"{nombre} tiene {edad} años.")

