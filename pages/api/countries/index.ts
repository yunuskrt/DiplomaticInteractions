import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case 'GET':
            try {
                const interactionData = [
                    {
                        reporter: "puertoRico",
                        reported: "kuwait",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "02.08.1996"
                    },
                    {
                        reporter: "uruguay",
                        reported: "guinea",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "02.11.2005"
                    },
                    {
                        reporter: "saintVincentAndTheGrenadines",
                        reported: "madagascar",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "27.04.2022"
                    },
                    {
                        reporter: "mauritania",
                        reported: "austria",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "10.03.2004"
                    },
                    {
                        reporter: "nicaragua",
                        reported: "timorLeste",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "24.06.2013"
                    },
                    {
                        reporter: "spain",
                        reported: "zimbabwe",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "22.09.1990"
                    },
                    {
                        reporter: "saudiArabia",
                        reported: "niger",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "08.09.2008"
                    },
                    {
                        reporter: "newZealand",
                        reported: "puertoRico",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "04.10.2004"
                    },
                    {
                        reporter: "norway",
                        reported: "tajikistan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "05.06.1992"
                    },
                    {
                        reporter: "palestine",
                        reported: "saintBarthelemy",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "06.04.2005"
                    },
                    {
                        reporter: "cameroon",
                        reported: "iran",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "09.03.2013"
                    },
                    {
                        reporter: "serbia",
                        reported: "turksaAndCaicosIslands",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "19.07.2019"
                    },
                    {
                        reporter: "sweden",
                        reported: "turkmenistan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "17.06.2004"
                    },
                    {
                        reporter: "romania",
                        reported: "chad",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "03.03.1995"
                    },
                    {
                        reporter: "norway",
                        reported: "eritrea",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "03.04.1999"
                    },
                    {
                        reporter: "indonesia",
                        reported: "gambia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "05.03.1996"
                    },
                    {
                        reporter: "swaziland",
                        reported: "unitedStates",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "10.05.2019"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "falklandIslands",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "23.05.1996"
                    },
                    {
                        reporter: "antiguaAndBarbuda",
                        reported: "bulgaria",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "22.10.2014"
                    },
                    {
                        reporter: "kuwait",
                        reported: "bangladesh",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "14.08.2010"
                    },
                    {
                        reporter: "trinidadAndTobago",
                        reported: "mongolia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "19.07.2020"
                    },
                    {
                        reporter: "reunion",
                        reported: "denmark",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "25.11.2018"
                    },
                    {
                        reporter: "oman",
                        reported: "saintMartin",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "27.10.2011"
                    },
                    {
                        reporter: "rwanda",
                        reported: "yemen",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "21.12.2014"
                    },
                    {
                        reporter: "westernSahara",
                        reported: "mali",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "22.08.2016"
                    },
                    {
                        reporter: "yemen",
                        reported: "georgia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "18.10.2012"
                    },
                    {
                        reporter: "mozambique",
                        reported: "malaysia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "16.09.2007"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "saoTomeAndPrincipe",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "11.05.1998"
                    },
                    {
                        reporter: "vietnam",
                        reported: "namibia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "11.09.2016"
                    },
                    {
                        reporter: "yemen",
                        reported: "sriLanka",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "08.12.1994"
                    },
                    {
                        reporter: "saintKittsAndNevis",
                        reported: "cameroon",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "01.07.2020"
                    },
                    {
                        reporter: "chad",
                        reported: "jamaica",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "18.12.2021"
                    },
                    {
                        reporter: "bosniaAndHerzegovina",
                        reported: "iceland",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "18.12.1993"
                    },
                    {
                        reporter: "denmark",
                        reported: "saudiArabia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "07.09.2022"
                    },
                    {
                        reporter: "moldova",
                        reported: "uruguay",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "06.08.1999"
                    },
                    {
                        reporter: "guyana",
                        reported: "saintLucia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "12.06.2016"
                    },
                    {
                        reporter: "denmark",
                        reported: "bolivia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "26.12.2008"
                    },
                    {
                        reporter: "russia",
                        reported: "norway",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "26.08.2014"
                    },
                    {
                        reporter: "iran",
                        reported: "yemen",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "28.08.2008"
                    },
                    {
                        reporter: "swaziland",
                        reported: "estonia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "25.07.2011"
                    },
                    {
                        reporter: "turksaAndCaicosIslands",
                        reported: "saoTomeAndPrincipe",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "17.10.1999"
                    },
                    {
                        reporter: "malta",
                        reported: "sriLanka",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "26.06.2002"
                    },
                    {
                        reporter: "saintLucia",
                        reported: "burkinaFaso",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "19.07.2003"
                    },
                    {
                        reporter: "dominica",
                        reported: "uzbekistan",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "24.08.2022"
                    },
                    {
                        reporter: "caymanIslands",
                        reported: "bermuda",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "07.09.2016"
                    },
                    {
                        reporter: "aruba",
                        reported: "dominicanRepublic",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "20.10.2018"
                    },
                    {
                        reporter: "finland",
                        reported: "capeVerde",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "09.05.2009"
                    },
                    {
                        reporter: "libya",
                        reported: "saintVincentAndTheGrenadines",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "09.01.2011"
                    },
                    {
                        reporter: "serbia",
                        reported: "ukraine",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "17.02.2018"
                    },
                    {
                        reporter: "palestine",
                        reported: "belize",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "04.05.2007"
                    },
                    {
                        reporter: "kazakhstan",
                        reported: "germany",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "04.03.2005"
                    },
                    {
                        reporter: "chile",
                        reported: "bahrain",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "09.11.1993"
                    },
                    {
                        reporter: "mauritius",
                        reported: "mauritania",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "04.04.2009"
                    },
                    {
                        reporter: "venezuela",
                        reported: "reunion",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "18.03.2021"
                    },
                    {
                        reporter: "armenia",
                        reported: "nigeria",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "20.12.1994"
                    },
                    {
                        reporter: "russia",
                        reported: "somalia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "19.05.1990"
                    },
                    {
                        reporter: "tonga",
                        reported: "mauritius",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "24.12.2011"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "oman",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "26.11.2020"
                    },
                    {
                        reporter: "luxembourg",
                        reported: "taiwan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "13.03.2006"
                    },
                    {
                        reporter: "austria",
                        reported: "rwanda",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "05.08.2004"
                    },
                    {
                        reporter: "westernSahara",
                        reported: "kosovo",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "01.12.2019"
                    },
                    {
                        reporter: "unitedKingdom",
                        reported: "philippines",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "10.09.2011"
                    },
                    {
                        reporter: "tuvalu",
                        reported: "coteDIvoire",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "21.07.1995"
                    },
                    {
                        reporter: "poland",
                        reported: "dominicanRepublic",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "07.01.2022"
                    },
                    {
                        reporter: "cyprus",
                        reported: "somalia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "24.02.2003"
                    },
                    {
                        reporter: "sriLanka",
                        reported: "anguilla",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "04.03.2008"
                    },
                    {
                        reporter: "sweden",
                        reported: "luxembourg",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "03.08.2016"
                    },
                    {
                        reporter: "uganda",
                        reported: "haiti",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "17.03.2003"
                    },
                    {
                        reporter: "guatemala",
                        reported: "nicaragua",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "04.11.1998"
                    },
                    {
                        reporter: "aruba",
                        reported: "kuwait",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "11.05.2018"
                    },
                    {
                        reporter: "curacao",
                        reported: "bangladesh",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "17.11.1995"
                    },
                    {
                        reporter: "belize",
                        reported: "trinidadAndTobago",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "26.05.1995"
                    },
                    {
                        reporter: "bruneiDarussalam",
                        reported: "france",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "20.11.1996"
                    },
                    {
                        reporter: "sudan",
                        reported: "northernMarianaIslands",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "02.01.2003"
                    },
                    {
                        reporter: "iraq",
                        reported: "bolivia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "11.09.2005"
                    },
                    {
                        reporter: "niger",
                        reported: "brazil",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "27.08.2004"
                    },
                    {
                        reporter: "capeVerde",
                        reported: "saintMartin",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "06.02.1997"
                    },
                    {
                        reporter: "thailand",
                        reported: "botswana",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "06.01.2016"
                    },
                    {
                        reporter: "congo",
                        reported: "finland",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "23.03.1997"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "curacao",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "04.07.2021"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "paraguay",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "20.05.1992"
                    },
                    {
                        reporter: "argentina",
                        reported: "japan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "01.12.1991"
                    },
                    {
                        reporter: "france",
                        reported: "india",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "03.02.1994"
                    },
                    {
                        reporter: "bulgaria",
                        reported: "haiti",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "21.05.2023"
                    },
                    {
                        reporter: "vietnam",
                        reported: "mali",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "08.12.2018"
                    },
                    {
                        reporter: "unitedArabEmirates",
                        reported: "aruba",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "16.06.2004"
                    },
                    {
                        reporter: "italy",
                        reported: "honduras",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "11.05.2001"
                    },
                    {
                        reporter: "finland",
                        reported: "reunion",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "14.11.2024"
                    },
                    {
                        reporter: "estonia",
                        reported: "israel",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "26.10.2002"
                    },
                    {
                        reporter: "spain",
                        reported: "mayotte",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "12.02.1999"
                    },
                    {
                        reporter: "cameroon",
                        reported: "kuwait",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "16.02.1992"
                    },
                    {
                        reporter: "saintVincentAndTheGrenadines",
                        reported: "slovenia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "15.12.2003"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "turksaAndCaicosIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "16.06.2003"
                    },
                    {
                        reporter: "northernMarianaIslands",
                        reported: "saintKittsAndNevis",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "09.07.2002"
                    },
                    {
                        reporter: "egypt",
                        reported: "saudiArabia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "06.07.1994"
                    },
                    {
                        reporter: "colombia",
                        reported: "togo",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "26.01.1995"
                    },
                    {
                        reporter: "saoTomeAndPrincipe",
                        reported: "somalia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "11.09.2019"
                    },
                    {
                        reporter: "myanmar",
                        reported: "grenada",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "16.01.2010"
                    },
                    {
                        reporter: "tanzania",
                        reported: "mauritius",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "22.07.2024"
                    },
                    {
                        reporter: "algeria",
                        reported: "trinidadAndTobago",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "23.01.2016"
                    },
                    {
                        reporter: "saintBarthelemy",
                        reported: "germany",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "25.02.1998"
                    },
                    {
                        reporter: "norway",
                        reported: "uruguay",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "27.11.2001"
                    },
                    {
                        reporter: "egypt",
                        reported: "trinidadAndTobago",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "08.10.1998"
                    },
                    {
                        reporter: "estonia",
                        reported: "norway",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "05.10.2015"
                    },
                    {
                        reporter: "belarus",
                        reported: "sabaNetherlands",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "08.09.2012"
                    },
                    {
                        reporter: "germany",
                        reported: "lebanon",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "21.05.2016"
                    },
                    {
                        reporter: "tajikistan",
                        reported: "morocco",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "05.06.1999"
                    },
                    {
                        reporter: "norway",
                        reported: "dominicanRepublic",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "02.09.2022"
                    },
                    {
                        reporter: "qatar",
                        reported: "guatemala",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "16.10.2002"
                    },
                    {
                        reporter: "somalia",
                        reported: "italy",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "19.10.1995"
                    },
                    {
                        reporter: "bahamas",
                        reported: "poland",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "14.05.2008"
                    },
                    {
                        reporter: "saintBarthelemy",
                        reported: "belgium",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "16.12.2008"
                    },
                    {
                        reporter: "puertoRico",
                        reported: "reunion",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "16.05.1999"
                    },
                    {
                        reporter: "honduras",
                        reported: "serbia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "12.05.2003"
                    },
                    {
                        reporter: "zambia",
                        reported: "cyprus",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "10.08.1990"
                    },
                    {
                        reporter: "croatia",
                        reported: "maldives",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "16.07.1998"
                    },
                    {
                        reporter: "bahrain",
                        reported: "fiji",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "26.03.2018"
                    },
                    {
                        reporter: "puertoRico",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "05.06.2019"
                    },
                    {
                        reporter: "mauritania",
                        reported: "thailand",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "10.11.2020"
                    },
                    {
                        reporter: "iceland",
                        reported: "westernSahara",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "11.10.2013"
                    },
                    {
                        reporter: "italy",
                        reported: "romania",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "20.07.1994"
                    },
                    {
                        reporter: "bhutan",
                        reported: "jordan",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "28.09.2023"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "americanSamoa",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "11.12.1998"
                    },
                    {
                        reporter: "chile",
                        reported: "lesotho",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "13.10.2018"
                    },
                    {
                        reporter: "northernMarianaIslands",
                        reported: "brazil",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "24.02.2018"
                    },
                    {
                        reporter: "qatar",
                        reported: "venezuela",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "11.09.2014"
                    },
                    {
                        reporter: "somalia",
                        reported: "ecuador",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "14.05.2021"
                    },
                    {
                        reporter: "turkey",
                        reported: "sabaNetherlands",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "22.09.2007"
                    },
                    {
                        reporter: "eritrea",
                        reported: "bruneiDarussalam",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "28.05.2014"
                    },
                    {
                        reporter: "southSudan",
                        reported: "nepal",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "15.05.1994"
                    },
                    {
                        reporter: "netherlands",
                        reported: "gabon",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "04.02.2014"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "solomonIslands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "06.11.2022"
                    },
                    {
                        reporter: "greece",
                        reported: "jordan",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "21.08.1998"
                    },
                    {
                        reporter: "belarus",
                        reported: "denmark",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "20.05.2003"
                    },
                    {
                        reporter: "lebanon",
                        reported: "aruba",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "23.08.2009"
                    },
                    {
                        reporter: "grenada",
                        reported: "bhutan",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "27.01.2006"
                    },
                    {
                        reporter: "turkmenistan",
                        reported: "honduras",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "15.07.2004"
                    },
                    {
                        reporter: "iran",
                        reported: "bolivia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "03.07.2006"
                    },
                    {
                        reporter: "russia",
                        reported: "saintMartin",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "05.03.1994"
                    },
                    {
                        reporter: "taiwan",
                        reported: "mozambique",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "12.08.1999"
                    },
                    {
                        reporter: "india",
                        reported: "barbados",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "05.04.1999"
                    },
                    {
                        reporter: "mayotte",
                        reported: "mexico",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "14.12.2021"
                    },
                    {
                        reporter: "samoa",
                        reported: "albania",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "07.04.1994"
                    },
                    {
                        reporter: "burundi",
                        reported: "palau",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "07.09.1999"
                    },
                    {
                        reporter: "nigeria",
                        reported: "guyana",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "07.07.2020"
                    },
                    {
                        reporter: "greece",
                        reported: "myanmar",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "14.02.2013"
                    },
                    {
                        reporter: "greece",
                        reported: "cyprus",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "07.11.1992"
                    },
                    {
                        reporter: "guam",
                        reported: "moldova",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "09.08.2003"
                    },
                    {
                        reporter: "ireland",
                        reported: "philippines",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "26.10.2015"
                    },
                    {
                        reporter: "malta",
                        reported: "turkey",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "12.06.2012"
                    },
                    {
                        reporter: "barbados",
                        reported: "demRepKorea",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "05.04.2006"
                    },
                    {
                        reporter: "unitedStates",
                        reported: "equatorialGuinea",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "15.04.2017"
                    },
                    {
                        reporter: "centralAfricanRepublic",
                        reported: "djibouti",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "02.05.2001"
                    },
                    {
                        reporter: "madagascar",
                        reported: "cambodia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "20.08.1994"
                    },
                    {
                        reporter: "greece",
                        reported: "suriname",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "06.02.2004"
                    },
                    {
                        reporter: "panama",
                        reported: "centralAfricanRepublic",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "13.05.2004"
                    },
                    {
                        reporter: "nepal",
                        reported: "belize",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "18.09.2016"
                    },
                    {
                        reporter: "frenchGuiana",
                        reported: "centralAfricanRepublic",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "08.02.2024"
                    },
                    {
                        reporter: "swaziland",
                        reported: "gabon",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "04.03.2014"
                    },
                    {
                        reporter: "luxembourg",
                        reported: "tunisia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "15.07.2001"
                    },
                    {
                        reporter: "madagascar",
                        reported: "burundi",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "18.04.2024"
                    },
                    {
                        reporter: "croatia",
                        reported: "france",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "18.07.2014"
                    },
                    {
                        reporter: "australia",
                        reported: "caymanIslands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "06.04.2022"
                    },
                    {
                        reporter: "luxembourg",
                        reported: "cuba",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "14.05.1993"
                    },
                    {
                        reporter: "gambia",
                        reported: "uzbekistan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "21.01.2002"
                    },
                    {
                        reporter: "finland",
                        reported: "israel",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "01.08.2017"
                    },
                    {
                        reporter: "greece",
                        reported: "oman",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "16.09.2005"
                    },
                    {
                        reporter: "iceland",
                        reported: "saintBarthelemy",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "17.06.1994"
                    },
                    {
                        reporter: "india",
                        reported: "uzbekistan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "24.05.2016"
                    },
                    {
                        reporter: "poland",
                        reported: "saoTomeAndPrincipe",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "26.11.2004"
                    },
                    {
                        reporter: "bangladesh",
                        reported: "cambodia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "02.05.2016"
                    },
                    {
                        reporter: "haiti",
                        reported: "guam",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "26.06.2001"
                    },
                    {
                        reporter: "kenya",
                        reported: "mali",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "12.09.2000"
                    },
                    {
                        reporter: "canaryIslandsSpain",
                        reported: "maldives",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "25.01.2005"
                    },
                    {
                        reporter: "vietnam",
                        reported: "nepal",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "19.10.1997"
                    },
                    {
                        reporter: "sintMaarten",
                        reported: "djibouti",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "08.04.1995"
                    },
                    {
                        reporter: "mongolia",
                        reported: "timorLeste",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "19.11.2017"
                    },
                    {
                        reporter: "unitedStates",
                        reported: "italy",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "17.03.1991"
                    },
                    {
                        reporter: "grenada",
                        reported: "martinique",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "02.11.1997"
                    },
                    {
                        reporter: "tajikistan",
                        reported: "northernMarianaIslands",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "22.12.2007"
                    },
                    {
                        reporter: "canaryIslandsSpain",
                        reported: "lithuania",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "13.12.2010"
                    },
                    {
                        reporter: "unitedArabEmirates",
                        reported: "japan",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "14.06.2006"
                    },
                    {
                        reporter: "qatar",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "21.05.2012"
                    },
                    {
                        reporter: "cyprus",
                        reported: "sierraLeone",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "19.03.2023"
                    },
                    {
                        reporter: "russia",
                        reported: "ethiopia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "22.06.1998"
                    },
                    {
                        reporter: "hungary",
                        reported: "libya",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "08.04.1999"
                    },
                    {
                        reporter: "burundi",
                        reported: "dominica",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "27.06.2001"
                    },
                    {
                        reporter: "philippines",
                        reported: "antiguaAndBarbuda",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "13.11.2016"
                    },
                    {
                        reporter: "ecuador",
                        reported: "newCaledonia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "10.08.2015"
                    },
                    {
                        reporter: "saudiArabia",
                        reported: "bangladesh",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "25.06.2008"
                    },
                    {
                        reporter: "suriname",
                        reported: "morocco",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "12.04.1995"
                    },
                    {
                        reporter: "madagascar",
                        reported: "india",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "20.01.2019"
                    },
                    {
                        reporter: "sabaNetherlands",
                        reported: "burkinaFaso",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "27.10.1999"
                    },
                    {
                        reporter: "ireland",
                        reported: "sintMaarten",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "25.07.2014"
                    },
                    {
                        reporter: "newZealand",
                        reported: "barbados",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "26.03.2002"
                    },
                    {
                        reporter: "turkey",
                        reported: "italy",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "26.08.2009"
                    },
                    {
                        reporter: "argentina",
                        reported: "moldova",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "07.07.1997"
                    },
                    {
                        reporter: "unitedArabEmirates",
                        reported: "greece",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "20.04.1997"
                    },
                    {
                        reporter: "algeria",
                        reported: "ghana",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "19.03.2009"
                    },
                    {
                        reporter: "jamaica",
                        reported: "mozambique",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "02.07.1997"
                    },
                    {
                        reporter: "belarus",
                        reported: "belize",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "27.10.2006"
                    },
                    {
                        reporter: "reunion",
                        reported: "solomonIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "12.01.1991"
                    },
                    {
                        reporter: "haiti",
                        reported: "yemen",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "11.07.2017"
                    },
                    {
                        reporter: "sierraLeone",
                        reported: "mexico",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "01.05.2009"
                    },
                    {
                        reporter: "palestine",
                        reported: "finland",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "06.07.2000"
                    },
                    {
                        reporter: "unitedStates",
                        reported: "lesotho",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "03.03.2019"
                    },
                    {
                        reporter: "eritrea",
                        reported: "centralAfricanRepublic",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "14.12.1990"
                    },
                    {
                        reporter: "newCaledonia",
                        reported: "martinique",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "16.02.2019"
                    },
                    {
                        reporter: "britishVirginIslands",
                        reported: "comoros",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "19.03.1994"
                    },
                    {
                        reporter: "argentina",
                        reported: "finland",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "02.05.1995"
                    },
                    {
                        reporter: "newCaledonia",
                        reported: "philippines",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "05.12.2011"
                    },
                    {
                        reporter: "mali",
                        reported: "coteDIvoire",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "02.05.2024"
                    },
                    {
                        reporter: "mayotte",
                        reported: "canaryIslandsSpain",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "18.07.2019"
                    },
                    {
                        reporter: "faeroeIslands",
                        reported: "guineaBissau",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "22.10.2009"
                    },
                    {
                        reporter: "greece",
                        reported: "bermuda",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "11.02.1994"
                    },
                    {
                        reporter: "mongolia",
                        reported: "syria",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "06.05.2005"
                    },
                    {
                        reporter: "china",
                        reported: "benin",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "26.10.2019"
                    },
                    {
                        reporter: "honduras",
                        reported: "lesotho",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "16.07.1993"
                    },
                    {
                        reporter: "panama",
                        reported: "niger",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "12.12.1997"
                    },
                    {
                        reporter: "montenegro",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "27.04.2011"
                    },
                    {
                        reporter: "switzerland",
                        reported: "vanuatu",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "01.05.2015"
                    },
                    {
                        reporter: "turksaAndCaicosIslands",
                        reported: "belize",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "25.06.1994"
                    },
                    {
                        reporter: "canada",
                        reported: "namibia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "06.06.1999"
                    },
                    {
                        reporter: "westernSahara",
                        reported: "coteDIvoire",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "24.07.2000"
                    },
                    {
                        reporter: "guadeloupe",
                        reported: "slovenia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "27.11.2006"
                    },
                    {
                        reporter: "palau",
                        reported: "marshallIslands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "17.09.2001"
                    },
                    {
                        reporter: "thailand",
                        reported: "sriLanka",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "25.04.2023"
                    },
                    {
                        reporter: "taiwan",
                        reported: "montserrat",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "02.04.2017"
                    },
                    {
                        reporter: "india",
                        reported: "liberia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "03.12.2017"
                    },
                    {
                        reporter: "bahrain",
                        reported: "mozambique",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "22.07.1996"
                    },
                    {
                        reporter: "eritrea",
                        reported: "nigeria",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "22.05.2003"
                    },
                    {
                        reporter: "bangladesh",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "13.01.2022"
                    },
                    {
                        reporter: "fiji",
                        reported: "croatia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "09.11.2003"
                    },
                    {
                        reporter: "jamaica",
                        reported: "argentina",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "16.04.1991"
                    },
                    {
                        reporter: "britishVirginIslands",
                        reported: "bolivia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "09.01.2008"
                    },
                    {
                        reporter: "turkey",
                        reported: "mayotte",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "21.06.2016"
                    },
                    {
                        reporter: "namibia",
                        reported: "belize",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "02.09.2023"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "coteDIvoire",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "09.07.2001"
                    },
                    {
                        reporter: "stEustatiusNetherlands",
                        reported: "denmark",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "25.08.2011"
                    },
                    {
                        reporter: "curacao",
                        reported: "guinea",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "23.10.2011"
                    },
                    {
                        reporter: "malaysia",
                        reported: "cuba",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "06.09.2011"
                    },
                    {
                        reporter: "nepal",
                        reported: "moldova",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "20.03.1994"
                    },
                    {
                        reporter: "caymanIslands",
                        reported: "cambodia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "05.06.2012"
                    },
                    {
                        reporter: "estonia",
                        reported: "tonga",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "19.08.2021"
                    },
                    {
                        reporter: "lithuania",
                        reported: "elSalvador",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "03.12.2001"
                    },
                    {
                        reporter: "centralAfricanRepublic",
                        reported: "newZealand",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "28.01.1999"
                    },
                    {
                        reporter: "russia",
                        reported: "albania",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "06.08.2010"
                    },
                    {
                        reporter: "bangladesh",
                        reported: "mauritania",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "07.01.1996"
                    },
                    {
                        reporter: "netherlands",
                        reported: "senegal",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "25.08.2002"
                    },
                    {
                        reporter: "turkey",
                        reported: "serbia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "18.05.2022"
                    },
                    {
                        reporter: "burkinaFaso",
                        reported: "canaryIslandsSpain",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "12.07.2007"
                    },
                    {
                        reporter: "poland",
                        reported: "iraq",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "16.08.2001"
                    },
                    {
                        reporter: "newCaledonia",
                        reported: "djibouti",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "14.01.1998"
                    },
                    {
                        reporter: "libya",
                        reported: "rwanda",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "11.08.2012"
                    },
                    {
                        reporter: "unitedArabEmirates",
                        reported: "jamaica",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "13.08.1999"
                    },
                    {
                        reporter: "libya",
                        reported: "cyprus",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "01.03.1990"
                    },
                    {
                        reporter: "saintVincentAndTheGrenadines",
                        reported: "poland",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "19.10.2006"
                    },
                    {
                        reporter: "thailand",
                        reported: "norway",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "18.02.2017"
                    },
                    {
                        reporter: "jamaica",
                        reported: "nepal",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "03.12.1993"
                    },
                    {
                        reporter: "lesotho",
                        reported: "myanmar",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "15.10.2013"
                    },
                    {
                        reporter: "australia",
                        reported: "suriname",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "17.10.2016"
                    },
                    {
                        reporter: "algeria",
                        reported: "frenchPolynesia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "25.02.2019"
                    },
                    {
                        reporter: "russia",
                        reported: "angola",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "12.02.2018"
                    },
                    {
                        reporter: "niger",
                        reported: "japan",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "10.03.2021"
                    },
                    {
                        reporter: "ghana",
                        reported: "romania",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "16.12.2009"
                    },
                    {
                        reporter: "cameroon",
                        reported: "togo",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "17.11.2000"
                    },
                    {
                        reporter: "saintKittsAndNevis",
                        reported: "sabaNetherlands",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "27.05.2002"
                    },
                    {
                        reporter: "burundi",
                        reported: "romania",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "18.05.2021"
                    },
                    {
                        reporter: "slovakia",
                        reported: "ireland",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "08.03.2021"
                    },
                    {
                        reporter: "mayotte",
                        reported: "tajikistan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "19.11.1994"
                    },
                    {
                        reporter: "newCaledonia",
                        reported: "ukraine",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "27.12.2005"
                    },
                    {
                        reporter: "azerbaijan",
                        reported: "ethiopia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "04.01.2019"
                    },
                    {
                        reporter: "bolivia",
                        reported: "indonesia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "10.07.1999"
                    },
                    {
                        reporter: "southAfrica",
                        reported: "britishVirginIslands",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "27.07.2012"
                    },
                    {
                        reporter: "latvia",
                        reported: "thailand",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "26.08.1994"
                    },
                    {
                        reporter: "stEustatiusNetherlands",
                        reported: "saintVincentAndTheGrenadines",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "12.11.1995"
                    },
                    {
                        reporter: "sabaNetherlands",
                        reported: "slovakia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "05.08.2019"
                    },
                    {
                        reporter: "bolivia",
                        reported: "cuba",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "16.02.2000"
                    },
                    {
                        reporter: "unitedKingdom",
                        reported: "nepal",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "13.04.2000"
                    },
                    {
                        reporter: "lebanon",
                        reported: "centralAfricanRepublic",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "09.01.2009"
                    },
                    {
                        reporter: "tuvalu",
                        reported: "swaziland",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "11.08.2023"
                    },
                    {
                        reporter: "tanzania",
                        reported: "azerbaijan",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "23.01.2009"
                    },
                    {
                        reporter: "chad",
                        reported: "burundi",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "20.03.2001"
                    },
                    {
                        reporter: "equatorialGuinea",
                        reported: "egypt",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "05.12.2021"
                    },
                    {
                        reporter: "lesotho",
                        reported: "unitedStates",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "11.12.2008"
                    },
                    {
                        reporter: "latvia",
                        reported: "iceland",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "25.05.2021"
                    },
                    {
                        reporter: "pakistan",
                        reported: "palau",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "08.02.2022"
                    },
                    {
                        reporter: "slovakia",
                        reported: "lithuania",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "09.04.2015"
                    },
                    {
                        reporter: "kenya",
                        reported: "cameroon",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "23.06.1999"
                    },
                    {
                        reporter: "saintVincentAndTheGrenadines",
                        reported: "pakistan",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "21.05.1992"
                    },
                    {
                        reporter: "martinique",
                        reported: "nauru",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "03.07.2015"
                    },
                    {
                        reporter: "marshallIslands",
                        reported: "syria",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "25.05.1999"
                    },
                    {
                        reporter: "slovakia",
                        reported: "jamaica",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "20.06.2004"
                    },
                    {
                        reporter: "angola",
                        reported: "sierraLeone",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "26.09.1991"
                    },
                    {
                        reporter: "myanmar",
                        reported: "equatorialGuinea",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "11.10.2022"
                    },
                    {
                        reporter: "denmark",
                        reported: "unitedStates",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "18.06.1996"
                    },
                    {
                        reporter: "frenchGuiana",
                        reported: "kuwait",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "25.05.2009"
                    },
                    {
                        reporter: "syria",
                        reported: "malta",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "28.08.2013"
                    },
                    {
                        reporter: "luxembourg",
                        reported: "spain",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "10.09.2002"
                    },
                    {
                        reporter: "belgium",
                        reported: "ireland",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "09.05.1994"
                    },
                    {
                        reporter: "britishVirginIslands",
                        reported: "eritrea",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "27.06.2001"
                    },
                    {
                        reporter: "bhutan",
                        reported: "tonga",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "19.11.2007"
                    },
                    {
                        reporter: "equatorialGuinea",
                        reported: "antiguaAndBarbuda",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "09.10.2010"
                    },
                    {
                        reporter: "jamaica",
                        reported: "caymanIslands",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "03.09.2002"
                    },
                    {
                        reporter: "suriname",
                        reported: "somalia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "03.12.1999"
                    },
                    {
                        reporter: "britishVirginIslands",
                        reported: "belize",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "25.08.1993"
                    },
                    {
                        reporter: "yemen",
                        reported: "marshallIslands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "26.09.2000"
                    },
                    {
                        reporter: "lebanon",
                        reported: "greenland",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "01.01.2005"
                    },
                    {
                        reporter: "trinidadAndTobago",
                        reported: "pakistan",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "11.02.2007"
                    },
                    {
                        reporter: "iceland",
                        reported: "newCaledonia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "20.09.2012"
                    },
                    {
                        reporter: "cuba",
                        reported: "belarus",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "07.08.2006"
                    },
                    {
                        reporter: "fiji",
                        reported: "guineaBissau",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "12.05.2006"
                    },
                    {
                        reporter: "kosovo",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "17.02.1999"
                    },
                    {
                        reporter: "papuaNewGuinea",
                        reported: "syria",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "27.02.2023"
                    },
                    {
                        reporter: "panama",
                        reported: "namibia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "16.07.2007"
                    },
                    {
                        reporter: "cameroon",
                        reported: "lithuania",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "16.03.2001"
                    },
                    {
                        reporter: "mali",
                        reported: "malaysia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "05.03.1992"
                    },
                    {
                        reporter: "venezuela",
                        reported: "puertoRico",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "09.09.2014"
                    },
                    {
                        reporter: "burkinaFaso",
                        reported: "zambia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "26.03.1998"
                    },
                    {
                        reporter: "congo",
                        reported: "americanSamoa",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "02.01.2011"
                    },
                    {
                        reporter: "armenia",
                        reported: "nauru",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "02.11.2006"
                    },
                    {
                        reporter: "dominica",
                        reported: "reunion",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "24.04.2012"
                    },
                    {
                        reporter: "faeroeIslands",
                        reported: "georgia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "15.06.1999"
                    },
                    {
                        reporter: "montenegro",
                        reported: "norway",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "11.09.2012"
                    },
                    {
                        reporter: "gabon",
                        reported: "tunisia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "12.09.2001"
                    },
                    {
                        reporter: "nicaragua",
                        reported: "belize",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "16.11.2019"
                    },
                    {
                        reporter: "guam",
                        reported: "burundi",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "22.03.2005"
                    },
                    {
                        reporter: "guadeloupe",
                        reported: "hungary",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "06.03.2003"
                    },
                    {
                        reporter: "elSalvador",
                        reported: "iceland",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "11.03.1991"
                    },
                    {
                        reporter: "uzbekistan",
                        reported: "nigeria",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "02.10.2008"
                    },
                    {
                        reporter: "guam",
                        reported: "oman",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "09.06.2005"
                    },
                    {
                        reporter: "newCaledonia",
                        reported: "switzerland",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "26.08.1992"
                    },
                    {
                        reporter: "marshallIslands",
                        reported: "israel",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "22.08.1991"
                    },
                    {
                        reporter: "mauritania",
                        reported: "papuaNewGuinea",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "02.08.2002"
                    },
                    {
                        reporter: "malawi",
                        reported: "philippines",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "06.12.2019"
                    },
                    {
                        reporter: "moldova",
                        reported: "paraguay",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "24.07.2024"
                    },
                    {
                        reporter: "guadeloupe",
                        reported: "oman",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "19.06.2005"
                    },
                    {
                        reporter: "fiji",
                        reported: "centralAfricanRepublic",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "14.07.2010"
                    },
                    {
                        reporter: "guineaBissau",
                        reported: "portugal",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "26.01.2020"
                    },
                    {
                        reporter: "laoPDR",
                        reported: "ireland",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "20.05.2014"
                    },
                    {
                        reporter: "netherlands",
                        reported: "belize",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "11.04.2021"
                    },
                    {
                        reporter: "bahamas",
                        reported: "india",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "02.04.2013"
                    },
                    {
                        reporter: "seychelles",
                        reported: "sweden",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "05.11.2020"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "mongolia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "06.12.1996"
                    },
                    {
                        reporter: "malaysia",
                        reported: "tajikistan",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "22.08.2016"
                    },
                    {
                        reporter: "demRepKorea",
                        reported: "curacao",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "14.01.1999"
                    },
                    {
                        reporter: "taiwan",
                        reported: "guatemala",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "02.06.1999"
                    },
                    {
                        reporter: "zambia",
                        reported: "somalia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "13.09.1999"
                    },
                    {
                        reporter: "bhutan",
                        reported: "reunion",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "28.12.2024"
                    },
                    {
                        reporter: "turkmenistan",
                        reported: "liberia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "17.06.2009"
                    },
                    {
                        reporter: "cuba",
                        reported: "unitedArabEmirates",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "17.01.1991"
                    },
                    {
                        reporter: "grenada",
                        reported: "sriLanka",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "12.02.2006"
                    },
                    {
                        reporter: "qatar",
                        reported: "argentina",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "17.09.2020"
                    },
                    {
                        reporter: "philippines",
                        reported: "argentina",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "20.09.2015"
                    },
                    {
                        reporter: "brazil",
                        reported: "canada",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "15.07.2013"
                    },
                    {
                        reporter: "gabon",
                        reported: "mauritania",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "18.09.1991"
                    },
                    {
                        reporter: "ireland",
                        reported: "libya",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "19.03.2021"
                    },
                    {
                        reporter: "israel",
                        reported: "brazil",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "22.01.1996"
                    },
                    {
                        reporter: "burkinaFaso",
                        reported: "norway",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "17.10.2005"
                    },
                    {
                        reporter: "estonia",
                        reported: "canaryIslandsSpain",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "12.03.2006"
                    },
                    {
                        reporter: "macedonia",
                        reported: "malaysia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "20.02.1993"
                    },
                    {
                        reporter: "belarus",
                        reported: "mauritania",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "20.08.2021"
                    },
                    {
                        reporter: "fiji",
                        reported: "liberia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "10.02.1990"
                    },
                    {
                        reporter: "belize",
                        reported: "kuwait",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "16.09.2021"
                    },
                    {
                        reporter: "liberia",
                        reported: "republicOfKorea",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "15.07.2002"
                    },
                    {
                        reporter: "iraq",
                        reported: "demRepKorea",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "24.11.2000"
                    },
                    {
                        reporter: "lebanon",
                        reported: "belize",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "11.12.2018"
                    },
                    {
                        reporter: "brazil",
                        reported: "demRepKorea",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "12.07.1996"
                    },
                    {
                        reporter: "haiti",
                        reported: "egypt",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "03.01.1990"
                    },
                    {
                        reporter: "saintBarthelemy",
                        reported: "croatia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "24.06.2015"
                    },
                    {
                        reporter: "thailand",
                        reported: "somalia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "05.04.2004"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "estonia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "03.06.2012"
                    },
                    {
                        reporter: "georgia",
                        reported: "moldova",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "24.07.2000"
                    },
                    {
                        reporter: "turkey",
                        reported: "stEustatiusNetherlands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "19.12.2021"
                    },
                    {
                        reporter: "mauritius",
                        reported: "lesotho",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "17.07.2024"
                    },
                    {
                        reporter: "panama",
                        reported: "kosovo",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "07.01.1996"
                    },
                    {
                        reporter: "tonga",
                        reported: "laoPDR",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "23.07.1995"
                    },
                    {
                        reporter: "tajikistan",
                        reported: "turkey",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "04.09.2017"
                    },
                    {
                        reporter: "frenchPolynesia",
                        reported: "madagascar",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "25.01.2001"
                    },
                    {
                        reporter: "northernMarianaIslands",
                        reported: "anguilla",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "04.03.2001"
                    },
                    {
                        reporter: "turkey",
                        reported: "eritrea",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "28.09.2020"
                    },
                    {
                        reporter: "qatar",
                        reported: "czechRepublic",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "12.01.2010"
                    },
                    {
                        reporter: "albania",
                        reported: "kosovo",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "20.04.2001"
                    },
                    {
                        reporter: "canada",
                        reported: "tunisia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "27.03.1994"
                    },
                    {
                        reporter: "capeVerde",
                        reported: "kosovo",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "27.09.2024"
                    },
                    {
                        reporter: "marshallIslands",
                        reported: "zambia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "16.03.1997"
                    },
                    {
                        reporter: "nauru",
                        reported: "lebanon",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "17.11.1997"
                    },
                    {
                        reporter: "thailand",
                        reported: "trinidadAndTobago",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "04.07.2000"
                    },
                    {
                        reporter: "saoTomeAndPrincipe",
                        reported: "denmark",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "07.06.2015"
                    },
                    {
                        reporter: "guinea",
                        reported: "senegal",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "16.11.2003"
                    },
                    {
                        reporter: "cyprus",
                        reported: "nicaragua",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "12.08.2011"
                    },
                    {
                        reporter: "malta",
                        reported: "albania",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "28.12.2014"
                    },
                    {
                        reporter: "iran",
                        reported: "qatar",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "27.06.2005"
                    },
                    {
                        reporter: "stEustatiusNetherlands",
                        reported: "laoPDR",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "11.12.2003"
                    },
                    {
                        reporter: "seychelles",
                        reported: "turkey",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "21.10.2016"
                    },
                    {
                        reporter: "croatia",
                        reported: "suriname",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "02.10.2007"
                    },
                    {
                        reporter: "ukraine",
                        reported: "djibouti",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "17.07.2024"
                    },
                    {
                        reporter: "pakistan",
                        reported: "nigeria",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "01.08.2022"
                    },
                    {
                        reporter: "gambia",
                        reported: "philippines",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "18.06.2020"
                    },
                    {
                        reporter: "djibouti",
                        reported: "panama",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "03.11.2014"
                    },
                    {
                        reporter: "georgia",
                        reported: "lebanon",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "28.02.2012"
                    },
                    {
                        reporter: "elSalvador",
                        reported: "turkey",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "28.09.2007"
                    },
                    {
                        reporter: "mexico",
                        reported: "argentina",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "26.12.2005"
                    },
                    {
                        reporter: "algeria",
                        reported: "haiti",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "21.04.1993"
                    },
                    {
                        reporter: "tonga",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "06.11.2006"
                    },
                    {
                        reporter: "guam",
                        reported: "benin",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "08.05.1993"
                    },
                    {
                        reporter: "malta",
                        reported: "laoPDR",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "15.11.2011"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "india",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "08.12.1994"
                    },
                    {
                        reporter: "trinidadAndTobago",
                        reported: "rwanda",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "04.12.2000"
                    },
                    {
                        reporter: "britishVirginIslands",
                        reported: "eritrea",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "13.03.1991"
                    },
                    {
                        reporter: "egypt",
                        reported: "azerbaijan",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "15.03.1994"
                    },
                    {
                        reporter: "ireland",
                        reported: "americanSamoa",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "28.12.2014"
                    },
                    {
                        reporter: "uganda",
                        reported: "israel",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "21.10.2012"
                    },
                    {
                        reporter: "greenland",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "03.02.2005"
                    },
                    {
                        reporter: "suriname",
                        reported: "turksaAndCaicosIslands",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "04.01.2006"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "16.10.2017"
                    },
                    {
                        reporter: "demRepKorea",
                        reported: "benin",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "02.10.2019"
                    },
                    {
                        reporter: "saintLucia",
                        reported: "marshallIslands",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "14.12.1990"
                    },
                    {
                        reporter: "egypt",
                        reported: "ghana",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "24.02.1998"
                    },
                    {
                        reporter: "togo",
                        reported: "czechRepublic",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "16.10.2007"
                    },
                    {
                        reporter: "palestine",
                        reported: "spain",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "19.10.1991"
                    },
                    {
                        reporter: "vietnam",
                        reported: "qatar",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "10.10.1994"
                    },
                    {
                        reporter: "qatar",
                        reported: "republicOfKorea",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "23.10.1997"
                    },
                    {
                        reporter: "cyprus",
                        reported: "nigeria",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "09.06.1992"
                    },
                    {
                        reporter: "chile",
                        reported: "antiguaAndBarbuda",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "06.08.2009"
                    },
                    {
                        reporter: "ireland",
                        reported: "namibia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "06.07.2022"
                    },
                    {
                        reporter: "bermuda",
                        reported: "syria",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "02.02.1990"
                    },
                    {
                        reporter: "luxembourg",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "06.11.2013"
                    },
                    {
                        reporter: "angola",
                        reported: "taiwan",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "15.08.1996"
                    },
                    {
                        reporter: "kosovo",
                        reported: "caymanIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "08.01.2021"
                    },
                    {
                        reporter: "belarus",
                        reported: "iraq",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "16.01.2019"
                    },
                    {
                        reporter: "federatedStatesOfMicronesia",
                        reported: "timorLeste",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "23.07.2016"
                    },
                    {
                        reporter: "ireland",
                        reported: "hungary",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "12.12.1993"
                    },
                    {
                        reporter: "demRepKorea",
                        reported: "georgia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "05.04.2019"
                    },
                    {
                        reporter: "newCaledonia",
                        reported: "bermuda",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "15.01.2009"
                    },
                    {
                        reporter: "suriname",
                        reported: "paraguay",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "11.08.2003"
                    },
                    {
                        reporter: "bermuda",
                        reported: "egypt",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "14.03.2008"
                    },
                    {
                        reporter: "guadeloupe",
                        reported: "tunisia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "22.04.2014"
                    },
                    {
                        reporter: "australia",
                        reported: "algeria",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "16.05.2018"
                    },
                    {
                        reporter: "djibouti",
                        reported: "turkey",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "13.05.2011"
                    },
                    {
                        reporter: "finland",
                        reported: "oman",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "09.06.2010"
                    },
                    {
                        reporter: "nepal",
                        reported: "indonesia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "24.06.2015"
                    },
                    {
                        reporter: "azerbaijan",
                        reported: "palestine",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "04.04.2005"
                    },
                    {
                        reporter: "northernMarianaIslands",
                        reported: "guadeloupe",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "27.09.2005"
                    },
                    {
                        reporter: "jordan",
                        reported: "myanmar",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "19.05.2007"
                    },
                    {
                        reporter: "panama",
                        reported: "kyrgyzstan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "03.05.1992"
                    },
                    {
                        reporter: "saintMartin",
                        reported: "uganda",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "04.02.2007"
                    },
                    {
                        reporter: "laoPDR",
                        reported: "guineaBissau",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "17.12.2016"
                    },
                    {
                        reporter: "libya",
                        reported: "burundi",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "03.07.2021"
                    },
                    {
                        reporter: "france",
                        reported: "montserrat",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "01.08.2021"
                    },
                    {
                        reporter: "britishVirginIslands",
                        reported: "japan",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "06.10.2017"
                    },
                    {
                        reporter: "tanzania",
                        reported: "malta",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "05.12.2015"
                    },
                    {
                        reporter: "nauru",
                        reported: "sriLanka",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "08.03.2024"
                    },
                    {
                        reporter: "myanmar",
                        reported: "cuba",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "12.04.1995"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "moldova",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "19.06.1992"
                    },
                    {
                        reporter: "swaziland",
                        reported: "kazakhstan",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "12.02.2011"
                    },
                    {
                        reporter: "saintVincentAndTheGrenadines",
                        reported: "malta",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "09.03.2001"
                    },
                    {
                        reporter: "denmark",
                        reported: "armenia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "25.05.2014"
                    },
                    {
                        reporter: "kazakhstan",
                        reported: "kuwait",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "16.05.1997"
                    },
                    {
                        reporter: "croatia",
                        reported: "palestine",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "22.06.2002"
                    },
                    {
                        reporter: "newZealand",
                        reported: "estonia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "13.02.1999"
                    },
                    {
                        reporter: "grenada",
                        reported: "australia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "21.07.2010"
                    },
                    {
                        reporter: "bosniaAndHerzegovina",
                        reported: "armenia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "15.08.1992"
                    },
                    {
                        reporter: "belarus",
                        reported: "jamaica",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "19.02.2020"
                    },
                    {
                        reporter: "norway",
                        reported: "iran",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "15.06.2009"
                    },
                    {
                        reporter: "kazakhstan",
                        reported: "frenchGuiana",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "19.05.1995"
                    },
                    {
                        reporter: "guinea",
                        reported: "saintBarthelemy",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "11.09.2017"
                    },
                    {
                        reporter: "mozambique",
                        reported: "sierraLeone",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "16.07.1996"
                    },
                    {
                        reporter: "chad",
                        reported: "italy",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "06.04.2001"
                    },
                    {
                        reporter: "niger",
                        reported: "nepal",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "07.12.2007"
                    },
                    {
                        reporter: "thailand",
                        reported: "frenchPolynesia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "04.08.2018"
                    },
                    {
                        reporter: "unitedStates",
                        reported: "turkmenistan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "11.07.2003"
                    },
                    {
                        reporter: "caymanIslands",
                        reported: "nauru",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "07.01.1992"
                    },
                    {
                        reporter: "northernMarianaIslands",
                        reported: "montenegro",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "28.05.2017"
                    },
                    {
                        reporter: "kosovo",
                        reported: "republicOfKorea",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "24.07.2007"
                    },
                    {
                        reporter: "caymanIslands",
                        reported: "anguilla",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "02.12.2008"
                    },
                    {
                        reporter: "grenada",
                        reported: "poland",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "25.05.1996"
                    },
                    {
                        reporter: "canada",
                        reported: "mexico",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "15.06.1992"
                    },
                    {
                        reporter: "cyprus",
                        reported: "cameroon",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "13.07.1995"
                    },
                    {
                        reporter: "portugal",
                        reported: "puertoRico",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "26.09.2018"
                    },
                    {
                        reporter: "denmark",
                        reported: "italy",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "03.01.2019"
                    },
                    {
                        reporter: "jamaica",
                        reported: "iran",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "18.08.1994"
                    },
                    {
                        reporter: "chile",
                        reported: "bahamas",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "27.03.2009"
                    },
                    {
                        reporter: "eritrea",
                        reported: "burundi",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "25.11.2004"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "mayotte",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "09.04.2001"
                    },
                    {
                        reporter: "frenchPolynesia",
                        reported: "luxembourg",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "11.01.2001"
                    },
                    {
                        reporter: "czechRepublic",
                        reported: "curacao",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "06.03.2000"
                    },
                    {
                        reporter: "kenya",
                        reported: "frenchPolynesia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "05.05.2009"
                    },
                    {
                        reporter: "uruguay",
                        reported: "uzbekistan",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "28.09.1990"
                    },
                    {
                        reporter: "frenchPolynesia",
                        reported: "armenia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "09.12.1990"
                    },
                    {
                        reporter: "india",
                        reported: "angola",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "20.02.2015"
                    },
                    {
                        reporter: "mauritius",
                        reported: "canaryIslandsSpain",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "17.07.1998"
                    },
                    {
                        reporter: "canaryIslandsSpain",
                        reported: "kazakhstan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "19.03.2013"
                    },
                    {
                        reporter: "grenada",
                        reported: "sabaNetherlands",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "10.07.2008"
                    },
                    {
                        reporter: "greenland",
                        reported: "swaziland",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "01.07.2020"
                    },
                    {
                        reporter: "curacao",
                        reported: "guatemala",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "09.11.1991"
                    },
                    {
                        reporter: "germany",
                        reported: "swaziland",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "01.10.2001"
                    },
                    {
                        reporter: "samoa",
                        reported: "montserrat",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "25.09.2012"
                    },
                    {
                        reporter: "fiji",
                        reported: "canada",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "12.12.2011"
                    },
                    {
                        reporter: "stEustatiusNetherlands",
                        reported: "greenland",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "22.05.2021"
                    },
                    {
                        reporter: "uruguay",
                        reported: "ghana",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "03.02.1990"
                    },
                    {
                        reporter: "tuvalu",
                        reported: "palau",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "17.12.2013"
                    },
                    {
                        reporter: "mozambique",
                        reported: "southAfrica",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "23.12.2018"
                    },
                    {
                        reporter: "jordan",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "11.09.2000"
                    },
                    {
                        reporter: "nigeria",
                        reported: "kosovo",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "22.02.2010"
                    },
                    {
                        reporter: "federatedStatesOfMicronesia",
                        reported: "portugal",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "27.10.2003"
                    },
                    {
                        reporter: "ireland",
                        reported: "thailand",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "05.07.2005"
                    },
                    {
                        reporter: "nigeria",
                        reported: "bosniaAndHerzegovina",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "10.04.1993"
                    },
                    {
                        reporter: "jamaica",
                        reported: "westernSahara",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "21.11.1998"
                    },
                    {
                        reporter: "azerbaijan",
                        reported: "togo",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "12.01.2019"
                    },
                    {
                        reporter: "india",
                        reported: "belgium",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "05.06.2016"
                    },
                    {
                        reporter: "macedonia",
                        reported: "zimbabwe",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "01.01.2006"
                    },
                    {
                        reporter: "equatorialGuinea",
                        reported: "curacao",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "16.12.2020"
                    },
                    {
                        reporter: "seychelles",
                        reported: "thailand",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "10.08.2009"
                    },
                    {
                        reporter: "lebanon",
                        reported: "guam",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "10.08.1999"
                    },
                    {
                        reporter: "saintLucia",
                        reported: "zimbabwe",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "17.11.2002"
                    },
                    {
                        reporter: "ghana",
                        reported: "algeria",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "10.08.1999"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "panama",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "12.12.1997"
                    },
                    {
                        reporter: "britishVirginIslands",
                        reported: "haiti",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "10.09.2005"
                    },
                    {
                        reporter: "brazil",
                        reported: "cuba",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "19.01.2010"
                    },
                    {
                        reporter: "chad",
                        reported: "guyana",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "16.06.2015"
                    },
                    {
                        reporter: "centralAfricanRepublic",
                        reported: "colombia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "07.11.2012"
                    },
                    {
                        reporter: "centralAfricanRepublic",
                        reported: "comoros",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "17.04.2008"
                    },
                    {
                        reporter: "haiti",
                        reported: "senegal",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "06.03.2008"
                    },
                    {
                        reporter: "falklandIslands",
                        reported: "benin",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "20.06.2010"
                    },
                    {
                        reporter: "greece",
                        reported: "portugal",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "23.05.2005"
                    },
                    {
                        reporter: "indonesia",
                        reported: "argentina",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "17.11.2008"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "gambia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "14.11.2015"
                    },
                    {
                        reporter: "togo",
                        reported: "timorLeste",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "19.11.1992"
                    },
                    {
                        reporter: "grenada",
                        reported: "djibouti",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "01.03.2022"
                    },
                    {
                        reporter: "oman",
                        reported: "curacao",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "26.05.2019"
                    },
                    {
                        reporter: "guinea",
                        reported: "bhutan",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "04.05.2004"
                    },
                    {
                        reporter: "guineaBissau",
                        reported: "sweden",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "01.03.1993"
                    },
                    {
                        reporter: "dominica",
                        reported: "angola",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "05.03.2013"
                    },
                    {
                        reporter: "tanzania",
                        reported: "falklandIslands",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "28.10.1994"
                    },
                    {
                        reporter: "saintLucia",
                        reported: "papuaNewGuinea",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "06.07.2022"
                    },
                    {
                        reporter: "hungary",
                        reported: "argentina",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "23.03.2013"
                    },
                    {
                        reporter: "maldives",
                        reported: "barbados",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "03.04.1996"
                    },
                    {
                        reporter: "kuwait",
                        reported: "portugal",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "10.08.2007"
                    },
                    {
                        reporter: "fiji",
                        reported: "faeroeIslands",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "11.04.2003"
                    },
                    {
                        reporter: "burundi",
                        reported: "russia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "16.10.2024"
                    },
                    {
                        reporter: "vietnam",
                        reported: "federatedStatesOfMicronesia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "09.05.2020"
                    },
                    {
                        reporter: "mauritania",
                        reported: "bahamas",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "14.04.2011"
                    },
                    {
                        reporter: "sabaNetherlands",
                        reported: "burkinaFaso",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "07.03.1993"
                    },
                    {
                        reporter: "coteDIvoire",
                        reported: "australia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "14.09.1993"
                    },
                    {
                        reporter: "austria",
                        reported: "slovakia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "20.04.1994"
                    },
                    {
                        reporter: "jordan",
                        reported: "botswana",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "05.10.1996"
                    },
                    {
                        reporter: "argentina",
                        reported: "colombia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "20.04.1994"
                    },
                    {
                        reporter: "vanuatu",
                        reported: "romania",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "12.04.2012"
                    },
                    {
                        reporter: "argentina",
                        reported: "guadeloupe",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "19.11.2009"
                    },
                    {
                        reporter: "ecuador",
                        reported: "madagascar",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "02.11.2004"
                    },
                    {
                        reporter: "paraguay",
                        reported: "gambia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "19.01.2009"
                    },
                    {
                        reporter: "cuba",
                        reported: "mayotte",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "22.09.2014"
                    },
                    {
                        reporter: "madagascar",
                        reported: "centralAfricanRepublic",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "14.10.2017"
                    },
                    {
                        reporter: "mauritania",
                        reported: "saintBarthelemy",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "05.05.1992"
                    },
                    {
                        reporter: "equatorialGuinea",
                        reported: "luxembourg",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "14.10.1999"
                    },
                    {
                        reporter: "westernSahara",
                        reported: "belgium",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "18.11.1996"
                    },
                    {
                        reporter: "gabon",
                        reported: "paraguay",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "20.01.2015"
                    },
                    {
                        reporter: "panama",
                        reported: "saintKittsAndNevis",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "24.03.2007"
                    },
                    {
                        reporter: "belize",
                        reported: "colombia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "08.08.2002"
                    },
                    {
                        reporter: "malaysia",
                        reported: "aruba",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "22.02.1992"
                    },
                    {
                        reporter: "nigeria",
                        reported: "caymanIslands",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "28.08.1990"
                    },
                    {
                        reporter: "guinea",
                        reported: "latvia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "01.04.2018"
                    },
                    {
                        reporter: "australia",
                        reported: "antiguaAndBarbuda",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "09.06.2011"
                    },
                    {
                        reporter: "namibia",
                        reported: "bolivia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "24.06.1996"
                    },
                    {
                        reporter: "guyana",
                        reported: "benin",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "15.04.2015"
                    },
                    {
                        reporter: "japan",
                        reported: "marshallIslands",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "05.06.2008"
                    },
                    {
                        reporter: "slovenia",
                        reported: "luxembourg",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "25.06.1996"
                    },
                    {
                        reporter: "nauru",
                        reported: "sudan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "09.02.2019"
                    },
                    {
                        reporter: "serbia",
                        reported: "solomonIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "17.08.2008"
                    },
                    {
                        reporter: "kenya",
                        reported: "antiguaAndBarbuda",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "24.03.2005"
                    },
                    {
                        reporter: "russia",
                        reported: "mauritania",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "16.02.2002"
                    },
                    {
                        reporter: "liberia",
                        reported: "albania",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "16.12.2009"
                    },
                    {
                        reporter: "algeria",
                        reported: "belgium",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "11.09.1997"
                    },
                    {
                        reporter: "estonia",
                        reported: "cyprus",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "23.06.1998"
                    },
                    {
                        reporter: "china",
                        reported: "nauru",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "02.10.2006"
                    },
                    {
                        reporter: "cuba",
                        reported: "liberia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "16.02.1991"
                    },
                    {
                        reporter: "pakistan",
                        reported: "finland",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "13.05.1994"
                    },
                    {
                        reporter: "martinique",
                        reported: "saoTomeAndPrincipe",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "13.08.2002"
                    },
                    {
                        reporter: "colombia",
                        reported: "morocco",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "27.12.2016"
                    },
                    {
                        reporter: "honduras",
                        reported: "mali",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "18.09.2013"
                    },
                    {
                        reporter: "lithuania",
                        reported: "stEustatiusNetherlands",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "18.05.2022"
                    },
                    {
                        reporter: "saintKittsAndNevis",
                        reported: "unitedStates",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "05.12.2021"
                    },
                    {
                        reporter: "cameroon",
                        reported: "papuaNewGuinea",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "11.10.2016"
                    },
                    {
                        reporter: "indonesia",
                        reported: "trinidadAndTobago",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "05.04.2017"
                    },
                    {
                        reporter: "federatedStatesOfMicronesia",
                        reported: "puertoRico",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "16.01.2019"
                    },
                    {
                        reporter: "capeVerde",
                        reported: "georgia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "12.04.1996"
                    },
                    {
                        reporter: "ireland",
                        reported: "antiguaAndBarbuda",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "14.11.2011"
                    },
                    {
                        reporter: "argentina",
                        reported: "cuba",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "04.08.2016"
                    },
                    {
                        reporter: "iran",
                        reported: "namibia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "25.11.2024"
                    },
                    {
                        reporter: "saintKittsAndNevis",
                        reported: "montserrat",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "24.09.1996"
                    },
                    {
                        reporter: "panama",
                        reported: "barbados",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "14.03.1991"
                    },
                    {
                        reporter: "thailand",
                        reported: "unitedArabEmirates",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "17.12.1991"
                    },
                    {
                        reporter: "cameroon",
                        reported: "poland",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "17.11.2013"
                    },
                    {
                        reporter: "mayotte",
                        reported: "southSudan",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "16.03.2024"
                    },
                    {
                        reporter: "myanmar",
                        reported: "seychelles",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "09.05.2021"
                    },
                    {
                        reporter: "saintKittsAndNevis",
                        reported: "reunion",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "02.02.1995"
                    },
                    {
                        reporter: "montenegro",
                        reported: "uruguay",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "02.08.2002"
                    },
                    {
                        reporter: "togo",
                        reported: "grenada",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "01.06.1991"
                    },
                    {
                        reporter: "denmark",
                        reported: "curacao",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "20.05.1998"
                    },
                    {
                        reporter: "stEustatiusNetherlands",
                        reported: "kenya",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "25.06.2013"
                    },
                    {
                        reporter: "latvia",
                        reported: "slovakia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "25.09.2007"
                    },
                    {
                        reporter: "uzbekistan",
                        reported: "timorLeste",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "04.12.2020"
                    },
                    {
                        reporter: "bahamas",
                        reported: "paraguay",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "28.07.1994"
                    },
                    {
                        reporter: "somalia",
                        reported: "gambia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "21.11.2001"
                    },
                    {
                        reporter: "zambia",
                        reported: "panama",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "25.03.2024"
                    },
                    {
                        reporter: "palestine",
                        reported: "republicOfKorea",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "28.02.2009"
                    },
                    {
                        reporter: "namibia",
                        reported: "luxembourg",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "04.08.1991"
                    },
                    {
                        reporter: "serbia",
                        reported: "namibia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "28.08.1990"
                    },
                    {
                        reporter: "saintMartin",
                        reported: "dominica",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "12.05.2001"
                    },
                    {
                        reporter: "costaRica",
                        reported: "serbia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "03.04.1991"
                    },
                    {
                        reporter: "sierraLeone",
                        reported: "cuba",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "25.01.1995"
                    },
                    {
                        reporter: "iceland",
                        reported: "georgia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "02.10.2000"
                    },
                    {
                        reporter: "eritrea",
                        reported: "israel",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "20.09.1998"
                    },
                    {
                        reporter: "lesotho",
                        reported: "haiti",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "03.06.2014"
                    },
                    {
                        reporter: "martinique",
                        reported: "caymanIslands",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "22.04.2011"
                    },
                    {
                        reporter: "reunion",
                        reported: "antiguaAndBarbuda",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "18.08.2019"
                    },
                    {
                        reporter: "iraq",
                        reported: "ghana",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "13.09.2019"
                    },
                    {
                        reporter: "saintMartin",
                        reported: "newCaledonia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "02.10.1991"
                    },
                    {
                        reporter: "mozambique",
                        reported: "algeria",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "11.04.1997"
                    },
                    {
                        reporter: "paraguay",
                        reported: "montserrat",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "10.12.2009"
                    },
                    {
                        reporter: "fiji",
                        reported: "southSudan",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "19.08.2016"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "saintVincentAndTheGrenadines",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "01.09.1995"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "coteDIvoire",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "04.12.2018"
                    },
                    {
                        reporter: "guadeloupe",
                        reported: "france",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "17.01.2013"
                    },
                    {
                        reporter: "finland",
                        reported: "newCaledonia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "17.09.1993"
                    },
                    {
                        reporter: "mayotte",
                        reported: "maldives",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "26.04.2017"
                    },
                    {
                        reporter: "frenchPolynesia",
                        reported: "cyprus",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "19.04.1997"
                    },
                    {
                        reporter: "newCaledonia",
                        reported: "djibouti",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "20.08.1997"
                    },
                    {
                        reporter: "botswana",
                        reported: "bangladesh",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "13.11.2012"
                    },
                    {
                        reporter: "falklandIslands",
                        reported: "colombia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "10.04.1998"
                    },
                    {
                        reporter: "chad",
                        reported: "falklandIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "02.03.2019"
                    },
                    {
                        reporter: "guam",
                        reported: "benin",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "19.01.2017"
                    },
                    {
                        reporter: "bahrain",
                        reported: "bolivia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "27.01.2014"
                    },
                    {
                        reporter: "canada",
                        reported: "peru",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "03.08.2009"
                    },
                    {
                        reporter: "tanzania",
                        reported: "bulgaria",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "23.06.2016"
                    },
                    {
                        reporter: "azerbaijan",
                        reported: "ireland",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "09.06.1998"
                    },
                    {
                        reporter: "tunisia",
                        reported: "chile",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "08.08.2001"
                    },
                    {
                        reporter: "paraguay",
                        reported: "poland",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "24.01.2023"
                    },
                    {
                        reporter: "greenland",
                        reported: "falklandIslands",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "07.08.1990"
                    },
                    {
                        reporter: "haiti",
                        reported: "frenchGuiana",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "10.08.1994"
                    },
                    {
                        reporter: "gambia",
                        reported: "brazil",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "24.06.2014"
                    },
                    {
                        reporter: "demRepKorea",
                        reported: "kazakhstan",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "01.07.2010"
                    },
                    {
                        reporter: "romania",
                        reported: "samoa",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "12.09.1990"
                    },
                    {
                        reporter: "norway",
                        reported: "nicaragua",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "03.09.2020"
                    },
                    {
                        reporter: "unitedKingdom",
                        reported: "mayotte",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "19.01.2011"
                    },
                    {
                        reporter: "chile",
                        reported: "montenegro",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "20.09.1998"
                    },
                    {
                        reporter: "bolivia",
                        reported: "lesotho",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "16.03.2016"
                    },
                    {
                        reporter: "mozambique",
                        reported: "mali",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "26.06.1992"
                    },
                    {
                        reporter: "frenchGuiana",
                        reported: "benin",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "28.02.2007"
                    },
                    {
                        reporter: "taiwan",
                        reported: "rwanda",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "12.09.1992"
                    },
                    {
                        reporter: "bruneiDarussalam",
                        reported: "tuvalu",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "01.12.2005"
                    },
                    {
                        reporter: "fiji",
                        reported: "vanuatu",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "10.01.2000"
                    },
                    {
                        reporter: "switzerland",
                        reported: "indonesia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "11.02.1991"
                    },
                    {
                        reporter: "uzbekistan",
                        reported: "anguilla",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "26.02.2003"
                    },
                    {
                        reporter: "nigeria",
                        reported: "lesotho",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "11.01.2007"
                    },
                    {
                        reporter: "croatia",
                        reported: "guyana",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "20.09.2019"
                    },
                    {
                        reporter: "philippines",
                        reported: "trinidadAndTobago",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "20.07.2016"
                    },
                    {
                        reporter: "morocco",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "12.02.2013"
                    },
                    {
                        reporter: "guinea",
                        reported: "saintKittsAndNevis",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "21.07.1998"
                    },
                    {
                        reporter: "myanmar",
                        reported: "falklandIslands",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "21.02.2021"
                    },
                    {
                        reporter: "serbia",
                        reported: "ireland",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "16.05.2010"
                    },
                    {
                        reporter: "taiwan",
                        reported: "peru",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "23.04.1994"
                    },
                    {
                        reporter: "guadeloupe",
                        reported: "morocco",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "26.08.2022"
                    },
                    {
                        reporter: "jordan",
                        reported: "paraguay",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "26.01.2011"
                    },
                    {
                        reporter: "malta",
                        reported: "palestine",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "15.09.2000"
                    },
                    {
                        reporter: "belgium",
                        reported: "burkinaFaso",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "14.08.1994"
                    },
                    {
                        reporter: "gambia",
                        reported: "croatia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "07.07.2008"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "austria",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "02.11.1994"
                    },
                    {
                        reporter: "newZealand",
                        reported: "togo",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "06.09.2005"
                    },
                    {
                        reporter: "frenchGuiana",
                        reported: "guatemala",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "11.08.1998"
                    },
                    {
                        reporter: "bangladesh",
                        reported: "armenia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "04.02.2021"
                    },
                    {
                        reporter: "guam",
                        reported: "bruneiDarussalam",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "28.12.1998"
                    },
                    {
                        reporter: "nepal",
                        reported: "australia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "08.08.2021"
                    },
                    {
                        reporter: "unitedStatesVirginIslands",
                        reported: "thailand",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "10.11.2022"
                    },
                    {
                        reporter: "canaryIslandsSpain",
                        reported: "unitedKingdom",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "27.11.2016"
                    },
                    {
                        reporter: "unitedStatesVirginIslands",
                        reported: "czechRepublic",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "22.03.2017"
                    },
                    {
                        reporter: "saintMartin",
                        reported: "colombia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "26.11.2016"
                    },
                    {
                        reporter: "stEustatiusNetherlands",
                        reported: "americanSamoa",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "05.01.2023"
                    },
                    {
                        reporter: "paraguay",
                        reported: "botswana",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "09.07.1997"
                    },
                    {
                        reporter: "iran",
                        reported: "peru",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "04.05.2010"
                    },
                    {
                        reporter: "australia",
                        reported: "switzerland",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "03.08.2001"
                    },
                    {
                        reporter: "guatemala",
                        reported: "namibia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "27.10.1996"
                    },
                    {
                        reporter: "gabon",
                        reported: "grenada",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "01.05.1998"
                    },
                    {
                        reporter: "nauru",
                        reported: "kyrgyzstan",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "20.11.2020"
                    },
                    {
                        reporter: "nepal",
                        reported: "cambodia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "28.11.2001"
                    },
                    {
                        reporter: "republicOfKorea",
                        reported: "saintMartin",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "02.06.1994"
                    },
                    {
                        reporter: "lebanon",
                        reported: "libya",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "21.01.1990"
                    },
                    {
                        reporter: "dominica",
                        reported: "tonga",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "18.11.2003"
                    },
                    {
                        reporter: "suriname",
                        reported: "saintLucia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "24.06.1997"
                    },
                    {
                        reporter: "kosovo",
                        reported: "bermuda",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "07.07.1998"
                    },
                    {
                        reporter: "australia",
                        reported: "rwanda",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "16.05.2002"
                    },
                    {
                        reporter: "bangladesh",
                        reported: "ecuador",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "27.07.2016"
                    },
                    {
                        reporter: "maldives",
                        reported: "portugal",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "04.01.1995"
                    },
                    {
                        reporter: "antiguaAndBarbuda",
                        reported: "djibouti",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "21.12.2003"
                    },
                    {
                        reporter: "burundi",
                        reported: "latvia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "11.08.2006"
                    },
                    {
                        reporter: "palestine",
                        reported: "slovenia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "05.02.1991"
                    },
                    {
                        reporter: "estonia",
                        reported: "philippines",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "12.11.2004"
                    },
                    {
                        reporter: "japan",
                        reported: "barbados",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "14.02.2014"
                    },
                    {
                        reporter: "mali",
                        reported: "benin",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "01.09.2005"
                    },
                    {
                        reporter: "cyprus",
                        reported: "bulgaria",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "22.08.1993"
                    },
                    {
                        reporter: "finland",
                        reported: "malaysia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "25.07.2007"
                    },
                    {
                        reporter: "sintMaarten",
                        reported: "cameroon",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "16.01.2001"
                    },
                    {
                        reporter: "czechRepublic",
                        reported: "palau",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "08.07.2005"
                    },
                    {
                        reporter: "serbia",
                        reported: "newZealand",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "01.12.2013"
                    },
                    {
                        reporter: "turkey",
                        reported: "frenchPolynesia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "19.03.2011"
                    },
                    {
                        reporter: "guatemala",
                        reported: "tunisia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "22.02.1996"
                    },
                    {
                        reporter: "macedonia",
                        reported: "venezuela",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "28.07.1998"
                    },
                    {
                        reporter: "netherlands",
                        reported: "canada",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "16.06.2020"
                    },
                    {
                        reporter: "nauru",
                        reported: "japan",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "28.02.1995"
                    },
                    {
                        reporter: "taiwan",
                        reported: "czechRepublic",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "11.10.1995"
                    },
                    {
                        reporter: "bahamas",
                        reported: "palau",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "07.04.1999"
                    },
                    {
                        reporter: "turkmenistan",
                        reported: "mozambique",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "13.08.2004"
                    },
                    {
                        reporter: "costaRica",
                        reported: "ireland",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "14.02.2003"
                    },
                    {
                        reporter: "finland",
                        reported: "greece",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "04.11.2010"
                    },
                    {
                        reporter: "guyana",
                        reported: "luxembourg",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "08.12.2016"
                    },
                    {
                        reporter: "china",
                        reported: "equatorialGuinea",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "28.08.2006"
                    },
                    {
                        reporter: "palestine",
                        reported: "uzbekistan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "28.02.1999"
                    },
                    {
                        reporter: "norway",
                        reported: "republicOfKorea",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "10.11.2016"
                    },
                    {
                        reporter: "saintBarthelemy",
                        reported: "czechRepublic",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "12.08.1992"
                    },
                    {
                        reporter: "turkmenistan",
                        reported: "bolivia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "18.07.1992"
                    },
                    {
                        reporter: "spain",
                        reported: "yemen",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "03.03.2024"
                    },
                    {
                        reporter: "belize",
                        reported: "unitedStates",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "08.10.1999"
                    },
                    {
                        reporter: "taiwan",
                        reported: "unitedArabEmirates",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "25.03.2017"
                    },
                    {
                        reporter: "elSalvador",
                        reported: "norway",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "21.07.2021"
                    },
                    {
                        reporter: "coteDIvoire",
                        reported: "turkey",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "08.06.2000"
                    },
                    {
                        reporter: "turksaAndCaicosIslands",
                        reported: "denmark",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "01.05.2008"
                    },
                    {
                        reporter: "bruneiDarussalam",
                        reported: "faeroeIslands",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "02.02.2008"
                    },
                    {
                        reporter: "newZealand",
                        reported: "botswana",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "08.12.1998"
                    },
                    {
                        reporter: "southAfrica",
                        reported: "tanzania",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "14.11.2012"
                    },
                    {
                        reporter: "burundi",
                        reported: "gambia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "03.03.2001"
                    },
                    {
                        reporter: "faeroeIslands",
                        reported: "costaRica",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "22.05.2013"
                    },
                    {
                        reporter: "greece",
                        reported: "mexico",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "13.08.2007"
                    },
                    {
                        reporter: "mozambique",
                        reported: "oman",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "10.07.2009"
                    },
                    {
                        reporter: "serbia",
                        reported: "zambia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "27.08.1997"
                    },
                    {
                        reporter: "cyprus",
                        reported: "india",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "25.11.2020"
                    },
                    {
                        reporter: "bangladesh",
                        reported: "nepal",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "24.01.1993"
                    },
                    {
                        reporter: "china",
                        reported: "equatorialGuinea",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "10.11.2018"
                    },
                    {
                        reporter: "turkmenistan",
                        reported: "iran",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "13.04.2008"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "thailand",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "09.09.1994"
                    },
                    {
                        reporter: "westernSahara",
                        reported: "solomonIslands",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "20.06.1993"
                    },
                    {
                        reporter: "angola",
                        reported: "niger",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "08.06.2011"
                    },
                    {
                        reporter: "greece",
                        reported: "solomonIslands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "16.12.1995"
                    },
                    {
                        reporter: "senegal",
                        reported: "federatedStatesOfMicronesia",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "10.10.1995"
                    },
                    {
                        reporter: "burundi",
                        reported: "westernSahara",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "14.09.2008"
                    },
                    {
                        reporter: "tonga",
                        reported: "algeria",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "02.07.2006"
                    },
                    {
                        reporter: "mayotte",
                        reported: "poland",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "16.06.2009"
                    },
                    {
                        reporter: "libya",
                        reported: "centralAfricanRepublic",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "03.05.2014"
                    },
                    {
                        reporter: "unitedStatesVirginIslands",
                        reported: "frenchGuiana",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "05.05.2006"
                    },
                    {
                        reporter: "guineaBissau",
                        reported: "palestine",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "12.02.1999"
                    },
                    {
                        reporter: "mexico",
                        reported: "nauru",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "11.09.2020"
                    },
                    {
                        reporter: "haiti",
                        reported: "oman",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "08.03.1998"
                    },
                    {
                        reporter: "turksaAndCaicosIslands",
                        reported: "martinique",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "19.09.1996"
                    },
                    {
                        reporter: "uruguay",
                        reported: "ethiopia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "09.11.1990"
                    },
                    {
                        reporter: "indonesia",
                        reported: "tajikistan",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "24.01.1998"
                    },
                    {
                        reporter: "ghana",
                        reported: "argentina",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "15.07.2009"
                    },
                    {
                        reporter: "honduras",
                        reported: "burkinaFaso",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "04.01.1994"
                    },
                    {
                        reporter: "china",
                        reported: "federatedStatesOfMicronesia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "05.07.2002"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "haiti",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "22.09.2011"
                    },
                    {
                        reporter: "thailand",
                        reported: "djibouti",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "27.12.2023"
                    },
                    {
                        reporter: "tuvalu",
                        reported: "kazakhstan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "12.07.1994"
                    },
                    {
                        reporter: "senegal",
                        reported: "iraq",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "17.02.2010"
                    },
                    {
                        reporter: "finland",
                        reported: "belarus",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "07.02.2003"
                    },
                    {
                        reporter: "guadeloupe",
                        reported: "botswana",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "16.02.2007"
                    },
                    {
                        reporter: "tuvalu",
                        reported: "egypt",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "22.01.2002"
                    },
                    {
                        reporter: "azerbaijan",
                        reported: "sudan",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "21.05.2002"
                    },
                    {
                        reporter: "romania",
                        reported: "iceland",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "23.02.2017"
                    },
                    {
                        reporter: "demRepKorea",
                        reported: "venezuela",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "25.05.2015"
                    },
                    {
                        reporter: "senegal",
                        reported: "bosniaAndHerzegovina",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "28.12.2008"
                    },
                    {
                        reporter: "sintMaarten",
                        reported: "bangladesh",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "19.01.1997"
                    },
                    {
                        reporter: "cambodia",
                        reported: "malta",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "17.05.1999"
                    },
                    {
                        reporter: "malta",
                        reported: "djibouti",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "21.04.1990"
                    },
                    {
                        reporter: "panama",
                        reported: "mongolia",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "03.03.2019"
                    },
                    {
                        reporter: "kenya",
                        reported: "turkmenistan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "04.06.2016"
                    },
                    {
                        reporter: "malta",
                        reported: "barbados",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "17.01.2006"
                    },
                    {
                        reporter: "swaziland",
                        reported: "chile",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "14.01.2005"
                    },
                    {
                        reporter: "haiti",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "02.03.2013"
                    },
                    {
                        reporter: "paraguay",
                        reported: "norway",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "04.04.2022"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "kyrgyzstan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "27.02.2005"
                    },
                    {
                        reporter: "mongolia",
                        reported: "canada",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "19.08.2016"
                    },
                    {
                        reporter: "kuwait",
                        reported: "saintLucia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "02.10.1993"
                    },
                    {
                        reporter: "botswana",
                        reported: "bhutan",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "23.03.2008"
                    },
                    {
                        reporter: "ireland",
                        reported: "guinea",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "05.01.2005"
                    },
                    {
                        reporter: "tunisia",
                        reported: "somalia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "15.07.2003"
                    },
                    {
                        reporter: "madagascar",
                        reported: "finland",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "21.03.2017"
                    },
                    {
                        reporter: "guineaBissau",
                        reported: "puertoRico",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "06.12.1990"
                    },
                    {
                        reporter: "somalia",
                        reported: "tunisia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "21.05.2024"
                    },
                    {
                        reporter: "lithuania",
                        reported: "canada",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "17.12.2018"
                    },
                    {
                        reporter: "sierraLeone",
                        reported: "bosniaAndHerzegovina",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "28.12.2016"
                    },
                    {
                        reporter: "armenia",
                        reported: "hungary",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "15.05.1993"
                    },
                    {
                        reporter: "somalia",
                        reported: "bosniaAndHerzegovina",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "11.10.1998"
                    },
                    {
                        reporter: "guineaBissau",
                        reported: "faeroeIslands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "27.06.2007"
                    },
                    {
                        reporter: "bahamas",
                        reported: "ecuador",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "02.01.2018"
                    },
                    {
                        reporter: "portugal",
                        reported: "papuaNewGuinea",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "05.05.1993"
                    },
                    {
                        reporter: "eritrea",
                        reported: "federatedStatesOfMicronesia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "09.02.2024"
                    },
                    {
                        reporter: "peru",
                        reported: "ghana",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "05.08.2014"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "gabon",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "26.08.1990"
                    },
                    {
                        reporter: "uruguay",
                        reported: "poland",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "15.05.1993"
                    },
                    {
                        reporter: "tunisia",
                        reported: "panama",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "23.12.2023"
                    },
                    {
                        reporter: "samoa",
                        reported: "togo",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "08.12.1994"
                    },
                    {
                        reporter: "bahrain",
                        reported: "austria",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "19.03.2007"
                    },
                    {
                        reporter: "mongolia",
                        reported: "curacao",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "25.03.2003"
                    },
                    {
                        reporter: "haiti",
                        reported: "syria",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "12.11.2004"
                    },
                    {
                        reporter: "capeVerde",
                        reported: "kyrgyzstan",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "20.01.1997"
                    },
                    {
                        reporter: "chad",
                        reported: "estonia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "17.07.2001"
                    },
                    {
                        reporter: "djibouti",
                        reported: "nauru",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "08.06.1993"
                    },
                    {
                        reporter: "kuwait",
                        reported: "austria",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "04.08.2014"
                    },
                    {
                        reporter: "kyrgyzstan",
                        reported: "kuwait",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "13.12.1992"
                    },
                    {
                        reporter: "palau",
                        reported: "reunion",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "23.09.1991"
                    },
                    {
                        reporter: "guam",
                        reported: "papuaNewGuinea",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "16.10.2006"
                    },
                    {
                        reporter: "samoa",
                        reported: "cambodia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "15.10.2012"
                    },
                    {
                        reporter: "finland",
                        reported: "mauritius",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "03.09.2009"
                    },
                    {
                        reporter: "malawi",
                        reported: "belgium",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "19.03.2023"
                    },
                    {
                        reporter: "kuwait",
                        reported: "comoros",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "27.06.1991"
                    },
                    {
                        reporter: "niger",
                        reported: "saoTomeAndPrincipe",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "11.01.2000"
                    },
                    {
                        reporter: "tuvalu",
                        reported: "venezuela",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "01.04.1994"
                    },
                    {
                        reporter: "angola",
                        reported: "syria",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "23.08.2023"
                    },
                    {
                        reporter: "yemen",
                        reported: "anguilla",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "18.02.2019"
                    },
                    {
                        reporter: "sierraLeone",
                        reported: "coteDIvoire",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "27.05.2019"
                    },
                    {
                        reporter: "tanzania",
                        reported: "vanuatu",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "14.07.2001"
                    },
                    {
                        reporter: "bangladesh",
                        reported: "ukraine",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "11.09.2024"
                    },
                    {
                        reporter: "mauritania",
                        reported: "serbia",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "24.05.2024"
                    },
                    {
                        reporter: "burkinaFaso",
                        reported: "paraguay",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "18.07.2006"
                    },
                    {
                        reporter: "sabaNetherlands",
                        reported: "southAfrica",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "08.10.1998"
                    },
                    {
                        reporter: "senegal",
                        reported: "belize",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "23.03.2003"
                    },
                    {
                        reporter: "kenya",
                        reported: "slovenia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "18.11.1992"
                    },
                    {
                        reporter: "sriLanka",
                        reported: "egypt",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "03.01.1994"
                    },
                    {
                        reporter: "sudan",
                        reported: "angola",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "23.11.2023"
                    },
                    {
                        reporter: "laoPDR",
                        reported: "iran",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "08.08.2023"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "norway",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "03.06.2003"
                    },
                    {
                        reporter: "armenia",
                        reported: "sriLanka",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "24.01.2010"
                    },
                    {
                        reporter: "egypt",
                        reported: "nauru",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "04.02.2020"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "tunisia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "01.04.1994"
                    },
                    {
                        reporter: "demRepKorea",
                        reported: "congo",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "21.11.2016"
                    },
                    {
                        reporter: "bhutan",
                        reported: "romania",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "06.10.2020"
                    },
                    {
                        reporter: "sabaNetherlands",
                        reported: "syria",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "12.02.2009"
                    },
                    {
                        reporter: "honduras",
                        reported: "france",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "01.12.2003"
                    },
                    {
                        reporter: "bangladesh",
                        reported: "cyprus",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "21.01.2024"
                    },
                    {
                        reporter: "niger",
                        reported: "mali",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "06.12.1991"
                    },
                    {
                        reporter: "ireland",
                        reported: "anguilla",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "17.08.2019"
                    },
                    {
                        reporter: "vietnam",
                        reported: "belgium",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "21.10.1992"
                    },
                    {
                        reporter: "vanuatu",
                        reported: "kenya",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "17.07.2001"
                    },
                    {
                        reporter: "swaziland",
                        reported: "unitedStates",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "06.10.2016"
                    },
                    {
                        reporter: "romania",
                        reported: "chile",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "24.11.1998"
                    },
                    {
                        reporter: "sierraLeone",
                        reported: "stEustatiusNetherlands",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "19.02.2015"
                    },
                    {
                        reporter: "bermuda",
                        reported: "saoTomeAndPrincipe",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "01.04.1993"
                    },
                    {
                        reporter: "belgium",
                        reported: "congo",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "08.08.2013"
                    },
                    {
                        reporter: "saintLucia",
                        reported: "ethiopia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "21.10.2006"
                    },
                    {
                        reporter: "finland",
                        reported: "seychelles",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "26.06.2019"
                    },
                    {
                        reporter: "guineaBissau",
                        reported: "uruguay",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "28.09.2017"
                    },
                    {
                        reporter: "ireland",
                        reported: "congo",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "20.01.2017"
                    },
                    {
                        reporter: "ethiopia",
                        reported: "algeria",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "01.09.1998"
                    },
                    {
                        reporter: "honduras",
                        reported: "puertoRico",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "20.04.2017"
                    },
                    {
                        reporter: "yemen",
                        reported: "ukraine",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "16.08.2014"
                    },
                    {
                        reporter: "kenya",
                        reported: "jordan",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "16.06.2011"
                    },
                    {
                        reporter: "guam",
                        reported: "cameroon",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "26.04.1997"
                    },
                    {
                        reporter: "switzerland",
                        reported: "grenada",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "06.06.2016"
                    },
                    {
                        reporter: "solomonIslands",
                        reported: "oman",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "20.03.2021"
                    },
                    {
                        reporter: "martinique",
                        reported: "coteDIvoire",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "23.07.2008"
                    },
                    {
                        reporter: "malawi",
                        reported: "kyrgyzstan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "19.05.2008"
                    },
                    {
                        reporter: "caymanIslands",
                        reported: "algeria",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "21.03.1991"
                    },
                    {
                        reporter: "trinidadAndTobago",
                        reported: "brazil",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "06.09.2017"
                    },
                    {
                        reporter: "montenegro",
                        reported: "centralAfricanRepublic",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "01.03.2011"
                    },
                    {
                        reporter: "mongolia",
                        reported: "namibia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "13.12.2003"
                    },
                    {
                        reporter: "mauritius",
                        reported: "curacao",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "24.12.1994"
                    },
                    {
                        reporter: "sweden",
                        reported: "turksaAndCaicosIslands",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "03.02.2021"
                    },
                    {
                        reporter: "tuvalu",
                        reported: "malaysia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "05.08.2023"
                    },
                    {
                        reporter: "lesotho",
                        reported: "sudan",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "18.08.2014"
                    },
                    {
                        reporter: "saintVincentAndTheGrenadines",
                        reported: "vietnam",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "10.05.2002"
                    },
                    {
                        reporter: "bosniaAndHerzegovina",
                        reported: "tanzania",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "01.09.2017"
                    },
                    {
                        reporter: "haiti",
                        reported: "ghana",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "13.02.1992"
                    },
                    {
                        reporter: "costaRica",
                        reported: "brazil",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "21.09.2015"
                    },
                    {
                        reporter: "mauritania",
                        reported: "jordan",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "04.03.2018"
                    },
                    {
                        reporter: "morocco",
                        reported: "bruneiDarussalam",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "12.02.1998"
                    },
                    {
                        reporter: "iran",
                        reported: "britishVirginIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "03.05.2016"
                    },
                    {
                        reporter: "faeroeIslands",
                        reported: "paraguay",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "23.11.2019"
                    },
                    {
                        reporter: "saintMartin",
                        reported: "estonia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "17.05.1999"
                    },
                    {
                        reporter: "ethiopia",
                        reported: "guadeloupe",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "01.11.2021"
                    },
                    {
                        reporter: "cuba",
                        reported: "montserrat",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "02.06.2012"
                    },
                    {
                        reporter: "guatemala",
                        reported: "marshallIslands",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "27.07.2018"
                    },
                    {
                        reporter: "france",
                        reported: "mauritius",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "19.05.2017"
                    },
                    {
                        reporter: "mayotte",
                        reported: "pakistan",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "25.08.2015"
                    },
                    {
                        reporter: "romania",
                        reported: "russia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "01.03.2011"
                    },
                    {
                        reporter: "sudan",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "15.04.1995"
                    },
                    {
                        reporter: "gabon",
                        reported: "paraguay",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "15.11.2014"
                    },
                    {
                        reporter: "tunisia",
                        reported: "ecuador",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "27.07.1993"
                    },
                    {
                        reporter: "nauru",
                        reported: "colombia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "03.04.2008"
                    },
                    {
                        reporter: "cambodia",
                        reported: "montserrat",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "03.09.2012"
                    },
                    {
                        reporter: "mayotte",
                        reported: "egypt",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "10.01.2019"
                    },
                    {
                        reporter: "sierraLeone",
                        reported: "newZealand",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "14.06.1996"
                    },
                    {
                        reporter: "comoros",
                        reported: "demRepKorea",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "04.06.2013"
                    },
                    {
                        reporter: "nepal",
                        reported: "botswana",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "15.08.2019"
                    },
                    {
                        reporter: "frenchGuiana",
                        reported: "puertoRico",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "09.04.2015"
                    },
                    {
                        reporter: "laoPDR",
                        reported: "tunisia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "military",
                        date: "15.05.2007"
                    },
                    {
                        reporter: "algeria",
                        reported: "unitedStatesVirginIslands",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "12.06.1996"
                    },
                    {
                        reporter: "elSalvador",
                        reported: "madagascar",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "16.10.2018"
                    },
                    {
                        reporter: "comoros",
                        reported: "sweden",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "19.08.1998"
                    },
                    {
                        reporter: "chile",
                        reported: "martinique",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "25.04.2022"
                    },
                    {
                        reporter: "estonia",
                        reported: "israel",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "12.06.2001"
                    },
                    {
                        reporter: "finland",
                        reported: "algeria",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "12.04.2005"
                    },
                    {
                        reporter: "india",
                        reported: "kazakhstan",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "14.02.1996"
                    },
                    {
                        reporter: "demRepKorea",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "15.06.2022"
                    },
                    {
                        reporter: "malta",
                        reported: "dominica",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "development",
                        date: "21.04.2012"
                    },
                    {
                        reporter: "mexico",
                        reported: "vietnam",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "17.08.2017"
                    },
                    {
                        reporter: "syria",
                        reported: "saintMartin",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "08.02.2022"
                    },
                    {
                        reporter: "bruneiDarussalam",
                        reported: "paraguay",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "06.07.1991"
                    },
                    {
                        reporter: "britishVirginIslands",
                        reported: "denmark",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "02.12.1997"
                    },
                    {
                        reporter: "caymanIslands",
                        reported: "lithuania",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "25.02.2014"
                    },
                    {
                        reporter: "angola",
                        reported: "japan",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "14.04.2005"
                    },
                    {
                        reporter: "chad",
                        reported: "kyrgyzstan",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "19.07.2008"
                    },
                    {
                        reporter: "sriLanka",
                        reported: "curacao",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "17.10.2013"
                    },
                    {
                        reporter: "solomonIslands",
                        reported: "saintVincentAndTheGrenadines",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "11.02.2010"
                    },
                    {
                        reporter: "grenada",
                        reported: "saintVincentAndTheGrenadines",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "23.01.1999"
                    },
                    {
                        reporter: "iraq",
                        reported: "ukraine",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "06.01.2023"
                    },
                    {
                        reporter: "faeroeIslands",
                        reported: "samoa",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "09.03.2000"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "grenada",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "02.01.2023"
                    },
                    {
                        reporter: "macedonia",
                        reported: "westernSahara",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "09.03.2019"
                    },
                    {
                        reporter: "maldives",
                        reported: "taiwan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "07.06.2023"
                    },
                    {
                        reporter: "gambia",
                        reported: "luxembourg",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "15.09.1998"
                    },
                    {
                        reporter: "bolivia",
                        reported: "bruneiDarussalam",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "military",
                        date: "26.04.1995"
                    },
                    {
                        reporter: "greenland",
                        reported: "bruneiDarussalam",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "24.09.2002"
                    },
                    {
                        reporter: "botswana",
                        reported: "tuvalu",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "20.10.2002"
                    },
                    {
                        reporter: "slovakia",
                        reported: "falklandIslands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "06.10.2004"
                    },
                    {
                        reporter: "slovakia",
                        reported: "italy",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "28.08.2005"
                    },
                    {
                        reporter: "libya",
                        reported: "demRepKorea",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "05.03.2017"
                    },
                    {
                        reporter: "uzbekistan",
                        reported: "unitedStates",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "18.09.2015"
                    },
                    {
                        reporter: "republicOfKorea",
                        reported: "luxembourg",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "military",
                        date: "26.10.2015"
                    },
                    {
                        reporter: "falklandIslands",
                        reported: "comoros",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "20.03.2011"
                    },
                    {
                        reporter: "unitedArabEmirates",
                        reported: "colombia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "09.06.2008"
                    },
                    {
                        reporter: "iran",
                        reported: "vietnam",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "01.08.2016"
                    },
                    {
                        reporter: "zambia",
                        reported: "netherlands",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "25.09.2006"
                    },
                    {
                        reporter: "greenland",
                        reported: "belarus",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "20.04.2022"
                    },
                    {
                        reporter: "papuaNewGuinea",
                        reported: "marshallIslands",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "28.10.2019"
                    },
                    {
                        reporter: "stEustatiusNetherlands",
                        reported: "guatemala",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "26.01.2001"
                    },
                    {
                        reporter: "belgium",
                        reported: "vanuatu",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "12.07.1991"
                    },
                    {
                        reporter: "montserrat",
                        reported: "jordan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "23.10.2023"
                    },
                    {
                        reporter: "guatemala",
                        reported: "syria",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "08.02.1991"
                    },
                    {
                        reporter: "liberia",
                        reported: "barbados",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "23.10.2005"
                    },
                    {
                        reporter: "trinidadAndTobago",
                        reported: "sabaNetherlands",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "17.07.1990"
                    },
                    {
                        reporter: "sudan",
                        reported: "nigeria",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "09.07.2018"
                    },
                    {
                        reporter: "cuba",
                        reported: "sweden",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "03.06.1997"
                    },
                    {
                        reporter: "capeVerde",
                        reported: "colombia",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "09.09.1994"
                    },
                    {
                        reporter: "hungary",
                        reported: "lebanon",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "13.05.2022"
                    },
                    {
                        reporter: "aruba",
                        reported: "luxembourg",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "08.01.1993"
                    },
                    {
                        reporter: "saintVincentAndTheGrenadines",
                        reported: "switzerland",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "20.07.2012"
                    },
                    {
                        reporter: "congo",
                        reported: "france",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "18.02.1991"
                    },
                    {
                        reporter: "dominicanRepublic",
                        reported: "vietnam",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "04.11.2006"
                    },
                    {
                        reporter: "faeroeIslands",
                        reported: "malta",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "25.02.2023"
                    },
                    {
                        reporter: "paraguay",
                        reported: "moldova",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "10.03.1996"
                    },
                    {
                        reporter: "czechRepublic",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "13.08.2023"
                    },
                    {
                        reporter: "slovenia",
                        reported: "dominicanRepublic",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "16.09.2010"
                    },
                    {
                        reporter: "lesotho",
                        reported: "pakistan",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "05.05.1996"
                    },
                    {
                        reporter: "serbia",
                        reported: "turkey",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "military",
                        date: "15.03.2006"
                    },
                    {
                        reporter: "burkinaFaso",
                        reported: "saintBarthelemy",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "09.04.1990"
                    },
                    {
                        reporter: "uruguay",
                        reported: "iraq",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "17.11.2003"
                    },
                    {
                        reporter: "kazakhstan",
                        reported: "unitedKingdom",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "07.10.1991"
                    },
                    {
                        reporter: "portugal",
                        reported: "palau",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "25.05.2022"
                    },
                    {
                        reporter: "turkmenistan",
                        reported: "belize",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "18.02.1990"
                    },
                    {
                        reporter: "italy",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "12.12.2003"
                    },
                    {
                        reporter: "greenland",
                        reported: "paraguay",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "18.08.2017"
                    },
                    {
                        reporter: "lebanon",
                        reported: "southSudan",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "20.04.1991"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "haiti",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "01.09.2022"
                    },
                    {
                        reporter: "bermuda",
                        reported: "belarus",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "20.09.1997"
                    },
                    {
                        reporter: "finland",
                        reported: "dominica",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "06.06.2024"
                    },
                    {
                        reporter: "slovakia",
                        reported: "gambia",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "10.09.1999"
                    },
                    {
                        reporter: "paraguay",
                        reported: "czechRepublic",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "14.07.2003"
                    },
                    {
                        reporter: "mali",
                        reported: "australia",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "08.07.2014"
                    },
                    {
                        reporter: "zimbabwe",
                        reported: "latvia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "political",
                        date: "28.09.1993"
                    },
                    {
                        reporter: "austria",
                        reported: "armenia",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "12.04.2004"
                    },
                    {
                        reporter: "saintKittsAndNevis",
                        reported: "syria",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "economic",
                        date: "12.03.1995"
                    },
                    {
                        reporter: "guadeloupe",
                        reported: "palestine",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "military",
                        date: "16.01.2013"
                    },
                    {
                        reporter: "cameroon",
                        reported: "unitedKingdom",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "military",
                        date: "15.10.2012"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "antiguaAndBarbuda",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "development",
                        date: "09.09.2021"
                    },
                    {
                        reporter: "liberia",
                        reported: "caymanIslands",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "political",
                        date: "18.06.1994"
                    },
                    {
                        reporter: "saintLucia",
                        reported: "nauru",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "development",
                        date: "17.11.2012"
                    },
                    {
                        reporter: "brazil",
                        reported: "thailand",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "political",
                        date: "15.06.2003"
                    },
                    {
                        reporter: "brazil",
                        reported: "rwanda",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "economic",
                        date: "28.09.2006"
                    },
                    {
                        reporter: "caymanIslands",
                        reported: "uzbekistan",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "development",
                        date: "28.03.2022"
                    },
                    {
                        reporter: "macedonia",
                        reported: "tanzania",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "23.08.1992"
                    },
                    {
                        reporter: "timorLeste",
                        reported: "saudiArabia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "political",
                        date: "07.11.2023"
                    },
                    {
                        reporter: "georgia",
                        reported: "ireland",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "24.11.2006"
                    },
                    {
                        reporter: "cuba",
                        reported: "saintBarthelemy",
                        interactionType: "leaderLevel",
                        conversationType: "faceToFace",
                        topic: "economic",
                        date: "13.11.1997"
                    },
                    {
                        reporter: "ireland",
                        reported: "nauru",
                        interactionType: "other",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "20.03.1994"
                    },
                    {
                        reporter: "elSalvador",
                        reported: "federatedStatesOfMicronesia",
                        interactionType: "leaderLevel",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "19.08.2021"
                    },
                    {
                        reporter: "myanmar",
                        reported: "sabaNetherlands",
                        interactionType: "mention",
                        conversationType: "telephone",
                        topic: "development",
                        date: "05.05.1997"
                    },
                    {
                        reporter: "argentina",
                        reported: "taiwan",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "political",
                        date: "26.08.2023"
                    },
                    {
                        reporter: "georgia",
                        reported: "croatia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "05.08.2006"
                    },
                    {
                        reporter: "faeroeIslands",
                        reported: "mauritania",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "development",
                        date: "28.05.1997"
                    },
                    {
                        reporter: "morocco",
                        reported: "dominica",
                        interactionType: "other",
                        conversationType: "telephone",
                        topic: "economic",
                        date: "05.08.1991"
                    },
                    {
                        reporter: "hungary",
                        reported: "reunion",
                        interactionType: "mention",
                        conversationType: "faceToFace",
                        topic: "political",
                        date: "07.07.2018"
                    },
                    {
                        reporter: "solomonIslands",
                        reported: "somalia",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "military",
                        date: "09.11.2002"
                    },
                    {
                        reporter: "pakistan",
                        reported: "china",
                        interactionType: "mention",
                        conversationType: "email",
                        topic: "political",
                        date: "15.06.2014"
                    },
                    {
                        reporter: "malaysia",
                        reported: "westernSahara",
                        interactionType: "other",
                        conversationType: "email",
                        topic: "development",
                        date: "18.04.2007"
                    },
                    {
                        reporter: "tuvalu",
                        reported: "timorLeste",
                        interactionType: "leaderLevel",
                        conversationType: "email",
                        topic: "economic",
                        date: "07.10.1992"
                    }
                ]
                res.status(200).json(interactionData);    
            } catch (error: any) {
                res.status(500).json({ message: error.message })
            }
        default:
            res.setHeader('Allow',['GET'])
            res.status(405).json({message:`Method ${method} not allowed.`})
            

    }
    
}