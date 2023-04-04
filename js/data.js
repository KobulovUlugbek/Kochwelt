let recipes = [ 
    {
        name: "Sommer Salat",
        instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur iure iste, sunt ad, delectus dolorum saepe repellat, expedita similique quas accusantium autem nam vel. Cum explicabo totam nesciunt, laudantium magni tenetur voluptas hic nisi odit ea eum quidem beatae consequatur rem neque non molestiae veniam, veritatis adipisci. Atque, molestias!",
        zubereitungsZeit: 15,
        gesamtZeit: 15,
        schwierigkeit: "lappen",
        img: 'salat-for-rezept.jpg',
        date: '05.03.2023',
        desc: 'Ein frischer Sommer Salat perfekt für heiße Stunden.',
        id: 0,
        erstellt_von: [
            {
                autor: 'Ulugbek',
                img:'profil-photo.jpeg',

            }
        ],
        zutaten: [
            {
                menge: 1,
                einheit: "",
                name: "Tomate"
            },
            {
                menge: 1,
                einheit: "",
                name: "Paprika"
            },
            {
                menge: 1/4,
                einheit: "",
                name: "Eisbergsalat"
            },
            {
                menge: 4,
                einheit: "",
                name: "Radischen"
            },
            {
                menge: 1,
                einheit: "",
                name: "Gurke"
            },
            {
                menge: 0.5,
                einheit: "",
                name: "Zwiebel"
            },
            {
                menge: 2,
                einheit: "",
                name: "Löffel Kräuteressig"
            },
            {
                menge: 1,
                einheit: "Priese",
                name: "Salz"
            },
            {
                menge: 1,
                einheit: "EL",
                name: "Olivenöl"
            },
        ]
    },
    {
        name: "Pfannkuchen",
        instructions: "Eier mit Milch, Zucker, Salz, Mehl und Mineralwasser zu einem glatten Teig rühren. Bei Bedarf noch etwas Mehl oder Wasser hinzugeben, um die gewünschte Konsistenz zu erreichen.",
        zubereitungsZeit: 15,
        gesamtZeit: 15,
        schwierigkeit: "Einfach",
        img: 'pancakes.jpg',
        date: '05.03.2023',
        desc: 'Ob als Pfannkuchen, Eierkuchen oder Palatschinken – wir lieben sie einfach. Sie sind so einfach und schnell zubereitet und schmecken mit jeder Füllung fantastisch',
        id: 1,
        erstellt_von: [
            {
                autor: 'Ulugbek',
                img:'profil-photo.jpeg',

            }
        ],
        zutaten: [
            {
                menge: 0.5,
                einheit:"",
                /* menge: 0.29,
                einheit: "", */
                name: "Ei"
            },
        
            {
                menge: 28.5,
                /* menge: 28.57, */
                einheit: "ml",
                name: "Milch"
            },
            {
                menge:0.1,
                /* menge: 0.14, */
                einheit: "Prise",
                name: "Salz"
            },
            {
                menge: 28.57,
                /* menge: 28.57, */
                einheit: "g",
                name: "Mehl"
            },
            {
                menge:8.6,
                /* menge: 8.57, */
                einheit: "ml",
                name: "Mineralwasser"
            },
        ]
    },
    {
        name: "Mousse au chocolat",
        instructions: `Eier trennen, Eiweiß und Sahne separat steif schlagen. Butter und Schokolade vorsichtig im Wasserbad schmelzen.
        Eigelb in einer großen Schüssel mit 2 EL heißem Wasser cremig schlagen, den Zucker einrühren bis die Masse hell und cremig ist. Die geschmolzene Schokolade unterheben, anschließend sofort Eischnee und Sahne unterziehen (nicht mit dem Elektro-Mixer!).
        
        Mindestens 2 Stunden im Kühlschrank kalt stellen. Aber nicht zu kalt servieren.
        Evtl. noch mit Schokostreuseln garnieren.`,
        zubereitungsZeit: 20,
        gesamtZeit: 2.5,
        schwierigkeit: "Einfach",
        img: 'chocolate-mousse.jpg',
        date: '05.03.2023',
        desc: 'Egal ob zu Weihnachten, Silvester oder einfach zum Naschen zwischendurch – Mit diesem Rezept wird auch deine Mousse au Chocolat richtig schön luftig. Probier es selbst!',
        id: 2,
        erstellt_von: [
            {
                autor: 'Ulugbek',
                img:'profil-photo.jpeg',

            }
        ],
        zutaten: [
            {
                menge: 50,
                einheit: "g",
                name: "Schokolade"
            },
            {
                menge:0.5,
                /* menge: 0.75, */
                einheit: "",
                name: "Ei(er)"
            },
            {
                menge: 50,
                einheit: "ml",
                name: "Sahne"
            },
            {
                menge: 10,
                einheit: "g",
                name: "Zucker"
            },
            {
                menge: 12,
                einheit: "g",
                name: "Butter"
            },
        ]
    },
    {
        name: "Schneller Tortelliniauflauf",
        instructions: `
        Erbsen in Salzwasser 3 Minuten blanchieren, anschließend abschrecken. Mais abtropfen lassen. Paprika vierteln, Kerngehäuse entfernen und in Streifen schneiden. Schinken in dünne Streifen schneiden. Zwiebel und Knoblauch schälen und fein würfeln.<br>
        Öl in einer Pfanne erhitzen, Zwiebel und Knoblauch darin 2 Minuten dünsten, Paprika zugeben und weitere 2 Minuten braten. Mit Milch und Sahne ablöschen, mit Salz, Pfeffer und Paprikapulver würzen und 3 Minuten köcheln lassen. Backofen auf 200°C Umluft vorheizen. <br>
        In der Zwischenzeit die Tortellini in reichlich Salzwasser 2 Minuten al dente kochen, abgießen und gut abtropfen.<br>
        Tortellini mit Gemüse, Schinken, Sauce und der Hälfte des Käses mischen, in eine Auflaufform geben und mit dem restlichen Käse bestreuen.<br>
        Auflauf im vorgeheizten Backofen für 10-15 Minuten gold-braun backen.

        `,
        zubereitungsZeit: 20,
        gesamtZeit: 2.5,
        schwierigkeit: "Einfach",
        img: 'tortellini.jpg',
        date: '05.03.2023',
        desc: 'Dieser Tortelliniauflauf ist ruckzuck fertig und schmeckt der ganzen Familie.',
        id: 3,
        erstellt_von: [
            {
                autor: 'Ulugbek',
                img:'profil-photo.jpeg',

            }
        ],
        zutaten: [
            {
                menge: 50,
                einheit: "g",
                name: "TK-Erbsen"
            },
            {
                menge:0.5,
                /* menge: 0.75, */
                einheit: "",
                name: " Dose(n) Mais"
            },
            {
                menge: 0.5,
                einheit: "",
                name: "rote Paprika"
            },
            {
                menge: 50,
                einheit: "g",
                name: "Kochschinken"
            },
            {
                menge: 0.5,
                einheit: "",
                name: "Zwiebel"
            },
            {
                menge: 0.5,
                einheit: "",
                name: "Zehe(n) Knoblauch"
            },
            {
                menge: 0.5,
                einheit: "EL",
                name: "Rapsöl"
            },
            {
                menge: 62.5,
                einheit: "ml",
                name: "Milch"
            },
            {
                menge: 62.5,
                einheit: "ml",
                name: "Schlagsahne"
            },
            {
                menge: 200,
                einheit: "g",
                name: "Tortellini (Kühlregal)"
            },
            {
                menge: 50,
                einheit: "g",
                name: "Gratinkäse"
            },
            {
                menge: '',
                einheit: "",
                name: "Salz"
            },
            {
                menge: '',
                einheit: "",
                name: "Pfeffer"
            },
        ]
    },
    {
        name: "Gebratene Nudeln",
        instructions: `
        Die Nudeln mit warmem Wasser übergießen, ca. 15 Min. ziehen lassen (bzw. nach Packungsangabe kochen), bis sie gar, aber nicht zu weich sind, und dann abtropfen lassen.<br>

        Das Hähnchenfleisch in kleine Stücke schneiden, in gesalzenem Wasser kochen und abtropfen lassen.<br>

        Etwas Öl in einen heißen Wok oder eine Pfanne geben, darin das verquirlte Ei kurz braten und verrühren, dann die Zwiebel hinzufügen und ganz kurz weiter braten. Die Karottenstreifen und den Lauch mit hineingeben und kurz braten. Dann die Nudeln mit braten, mit Salz, Zucker und der dunklen Sojasauce würzen, gut mischen und weiter braten.
        <br>
        Das Fleisch und die Sojasprossen hinzufügen und in der Hitze kurz untermischen. Etwas weißen Pfeffer und ein bisschen Sesamöl (ca. 1/2 - 1 TL) hineinmischen und die Nudeln servieren.

        `,
        zubereitungsZeit: 20,
        gesamtZeit: 0.5,
        schwierigkeit: "Einfach",
        img: 'china.jpg',
        date: '05.03.2023',
        desc: 'Gebratene Nudeln wie vom Asiaten / China Imbiss',
        id: 4,
        erstellt_von: [
            {
                autor: 'Ulugbek',
                img:'profil-photo.jpeg',

            }
        ],
        zutaten: [
            {
                menge: 125,
                einheit: "g",
                name: "Woknudeln"
            },
            {
                menge: 1,
                einheit: "handvoll",
                name: "Karotte(n), in Streifen geschnitten"
            },
            {
                menge: 1,
                einheit: "handvoll",
                name: "Sojasprossen"
            },
            {
                menge: 1,
                einheit: "handvoll",
                name: "Lauch, kleingeschnitten"
            },
            {
                menge: 1,
                einheit: "EL",
                name: "Zwiebel(n), gehackt"
            },
            {
                menge: 1,
                einheit: "",
                name: "Ei(er) verquirlt"
            },
            {
                menge: 80,
                einheit: "g",
                name: "Hähnchenfleisch"
            },
            {
                menge: 0.5,
                einheit: "TL",
                name: "Zucker"
            },
            {
                menge: 1,
                einheit: "EL",
                name: "Sojasauce, dunkle"
            },
            {
                menge: '',
                einheit: 'etwas',
                name: "Pfeffer"
            },
            {
                menge: '',
                einheit: 'etwas',
                name: "Salz"
            },
            {
                menge: '',
                einheit: 'etwas',
                name: "Sesamöl"
            },
            {
                menge: "",
                einheit: 'etwas',
                name: "Öl zum Braten"
            },
        ]
    },
]



