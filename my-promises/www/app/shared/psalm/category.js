/**
 * Created by ASUS on 15/08/2016.
 */
angular.module('app.services').factory('PsalmsTree',PsalmsTree);

function PsalmsTree() {
    return [
        {
            "name":"Alabanzas",
            "children":[
                {
                    "title":"General",
                    "items":[32,46,66,91,111,112,116,133,134,135,144,145,146,148,149,150]
                },
                {
                    "title":"Naturaleza",
                    "items":[8,18,28,64,76,92,103,148]
                },
                {
                    "title":"Historia",
                    "items":[75,80,104,105,106]
                },
                {
                    "title":"Ley",
                    "items":[1,13,36,118]
                },
                {
                    "title":"A Dios Rey",
                    "items":[46,92,95,96,97,98]
                }

            ]

        },
        {
            "name":"Fiestas y tiempos liturgicos",
            "children":[
                {
                    "title":"Mesiánicos",
                     "items":[2,44,71,88,109,117,131]
                },
                {
                    "title":"Adviento",
                    "items":[23,84,95,97]
                },
                {
                    "title":"Parusía",
                    "items":[10,57,74,75,81,93,95,97]
                },
                {
                    "title":"Navidad",
                    "items":[2,84,101,102,109]
                },
                {
                    "title":"Epifanía",
                    "items":[23,44,71,79,92,97,131]
                },
                {
                    "title":"Pasión",
                    "items":[21,30,34,39,54,68,87]
                },
                {
                    "title":"Resurrección",
                    "items":[44,56,67,103,113,114,117,125,135]
                },
                {
                    "title":"Ascensión",
                    "items":[46,56,67]
                },
                {
                    "title":"Pentecostés",
                    "items":[28,45,47,98,103,118,145]
                },
                {
                    "title":"Iglesia",
                    "items":[66,83,86,121,124,132,146,147]
                },
                {
                    "title":"Peregrinación",
                    "items":[67,83,121]
                },
                {
                    "title":"Procesión",
                    "items":[67,99]
                },
                {
                    "title":"Entrada",
                    "items":[14,23,94]
                },
                {
                    "title":"Sacramento",
                    "items":[4,22,61,103]
                },
                {
                    "title":"Bendición",
                    "items":[66,117,133]
                },
                {
                    "title":"Templo",
                    "items":[45,47,56,62,120,131]
                },
                {
                    "title":"Mañana",
                    "items":[5,62,89,102,142]
                },
                {
                    "title":"Noche",
                    "items":[3,4,90,133,140]
                }
            ]

        },{
            "name":"Peticion",
            "children":[
                {
                    "title":"Enfermedad",
                    "items":[6, 37, 87, 101]
                },
                {
                    "title":"Muerte",
                    "items":[ 38, 87, 89, 142]
                },
                {
                    "title":"Abandono",
                    "items":[21,24]
                },
                {
                    "title":"Acusación injusta",
                    "items":[5, 7, 16, 25, 34, 58, 68, 108]
                },
                {
                    "title":"Calumnia y mentira",
                    "items":[ 11, 27, 119]
                },
                {
                    "title":"Persecución",
                    "items":[6, 9, 12, 34, 42, 53, 54, 55, 63, 69, 85, 139, 141]
                },
                {
                    "title":"Destierro",
                    "items":[41, 42, 78, 79, 125, 136]
                },
                {
                    "title":"Guerra y paz",
                    "items":[19, 20, 43, 59, 73, 76, 79, 82, 88, 146]
                },
                {
                    "title":"Cosechas y prosperidad",
                    "items":[64,147]
                },
                {
                    "title":"Por los gobernantes",
                    "items":[19, 20, 88, 100, 143]
                },
                {
                    "title":"Por el Papa, los obispos, los sacerdotes",
                    "items":[19, 20, 60, 71, 131]
                },
                {
                    "title":"Por la familia",
                    "items":[126, 127, 132, 143]
                }
            ]

        },
        {
            "name":"Confianza",
            "children":[
                {
                    "title":"Confianza",
                    "items":[3, 4, 9, 10, 15, 22, 26, 30, 33, 35, 38, 45, 48, 55, 56, 61, 62, 70, 72, 77, 84,90, 102, 107, 113, 120, 122, 124, 130, 138]
                }
            ]
        },
        {
            "name":"Acción de gracias",
            "children":[
                {
                    "title":"En general",
                    "items":[39, 65, 106, 110, 114, 115, 123, 125, 128, 137]
                },
                {
                    "title":"Por una victoria",
                    "items":[17, 52, 117]
                },
                {
                    "title":"Liberación de la muerte",
                    "items":[29,40]
                },
                {
                    "title":"Perdón del pecado",
                    "items":[ 31, 49, 50, 51, 102, 129]
                }
            ]
        }
    ]
}