from mimesis import Generic
from mimesis import Person
from mimesis import Address
from mimesis.locales import Locale
from mimesis import Datetime



# Initialiser l'objet Generic de mimesis
generic = Generic(locale=Locale.FR)
#person = generic.
person = Person('fr')
naiss = Datetime()
fr = Address(locale=Locale.FR)


# Liste de villes proches de Caen
villes = ['Caen', 'Herouville-Saint-Clair', 'Mondeville', 'Ouistreham', 'Ifs', 'Giberville', 'Lisieux', 'Bayeux', 'Vire', 'Falaise']
code_postaux = [14000, 14200, 14120, 14150, 14123, 14940, 14100, 14400, 14500, 14700]

def rechercher_ville(villes, nom_ville):
    for i, element in enumerate(villes):
        if element == nom_ville:
            return i

print("Administre.e, Nom, Prenom, Naissance, Code Postal, Ville, Tel")

for i in range(198):
    admin_id = generic.random.randint(120, 1000)
    nom = person.last_name().upper()
    prenom = person.first_name()
    naissance = naiss.datetime(start=1960, end=2005).strftime('%d/%m/%Y')
    adresse = fr.address()
    ville = generic.random.choice(villes)
    code_postale = code_postaux[rechercher_ville(villes, ville)]
    tel = generic.random.custom_code(mask='02 ## ## ## ##')

    print(f"{admin_id}; {nom}; {prenom}; {naissance}; {adresse}; {code_postale}; {ville.upper()}; {tel}")
