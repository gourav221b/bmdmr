import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"

import document from "../assets/Untitled.png"
import document2 from "../assets/Untitled2.png"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {
            id: 9,
         name: ' Global 3D Printing Filament Market', 
         price: 480, 
         categorisation:" By Type(2016-2026), By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",

         image: document, 
         productStatus: 'Food & Beverages', 
         month:11,
         year:2019, 
         Samplelink:"../samplefiles/1.pdf",
         toc:true,
         table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n\t6.1.Drivers \n \t6.2.Restraints \n 6.3.Opportunities \n6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n 8.1.Global XXX Market- Supply Chain Analysis \n8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
        },{
            id: 8,
         name: ' Chemicals & Materials', 
         price: 40, 
         categorisation:" By Type(2016-2026),  By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",
         image: document, 
         productStatus: 'Chemicals & Materials', 
         month:12,
         year:2019, 
         Samplelink:"../samplefiles/1.pdf",
         toc:true,
         table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n6.1.Drivers \n 6.2.Restraints \n 6.3.Opportunities \n6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n 8.1.Global XXX Market- Supply Chain Analysis \n8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
        },
        {
            id: 7, 
        name: 'Consumer Goods', 
        price: 200, 
        categorisation:" By Type(2016-2026), By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",
        image: document2,
        productStatus: 'Consumer Goods',
        month:11,
         year:2019, 
         Samplelink:"",
         toc:false,
         table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 <br>/5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n6.1.Drivers \n 6.2.Restraints \n 6.3.Opportunities \n6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n 8.1.Global XXX Market- Supply Chain Analysis \n8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
    },
        {
            id: 6,
         name: 'Food & Beverages', 
         price: 300, 
         categorisation:" By Type(2016-2026), By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",
         image: document,
         productStatus: 'Food & Beverages',
         month:10,
         year:2019, 
         Samplelink:"",
         toc:true,
         table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 <br>/5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n6.1.Drivers \n 6.2.Restraints \n 6.3.Opportunities \n6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n 8.1.Global XXX Market- Supply Chain Analysis \n8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
        },
        {
            id: 5, 
        name: 'Food & Beverages', 
        price: 150, 
        categorisation:" By Type(2016-2026), By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",
        image: document2,
        productStatus: 'Chemicals & Materials',
        month:9,
        year:2019, 
        Samplelink:"",
        toc:true,
        table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 <br>/5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n6.1.Drivers \n 6.2.Restraints \n 6.3.Opportunities \n6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n 8.1.Global XXX Market- Supply Chain Analysis \n8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
    },

        {
            id: 4,
         name: 'HealthCare', 
         price: 160, 
         categorisation:" By Type(2016-2026), By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",
         image: document,
         productStatus: 'HealthCare',
         month:8,
         year:2019, 
         Samplelink:"",
         toc:true,
         table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 <br>/5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n6.1.Drivers \n 6.2.Restraints \n 6.3.Opportunities \n6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n 8.1.Global XXX Market- Supply Chain Analysis \n8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
        },

        {
            id: 3, 
        name: 'ICT', 
        price: 500, 
        categorisation:" By Type(2016-2026), By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",
        image: document2,
        productStatus: 'ICT',
        month:7,
        year:2019, 
        Samplelink:"",
        toc:true,
        table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 <br>/5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n6.1.Drivers \n 6.2.Restraints \n 6.3.Opportunities \n6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n 8.1.Global XXX Market- Supply Chain Analysis \n8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
    },
        {
            id: 2, 
        name: 'Banking, Financal Services, Insurance',
         price: 240, 
         categorisation:" By Type(2016-2026), By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",
        image: document,
        productStatus: 'Banking, Finance, Insurance',
        month:5,
        year:2019, 
        Samplelink:"",
        toc:true,
        table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 <br>/5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n6.1.Drivers \n 6.2.Restraints \n 6.3.Opportunities \n6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n 8.1.Global XXX Market- Supply Chain Analysis \n8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
    },

        {id: 1, 
        name: 'Automotive and Aerospace', 
        price: 120, 
        categorisation:" By Type(2016-2026), By Type (2016-2026) By Application (2016-2026)	By End-User (2016-2026)	By Region (2016-2026)	By Company Share Analysis (2020)...  ",
        image: document2,
        productStatus: 'Automotive and Aerospace',
        month:4,
        year:2019, 
        Samplelink:"",
        toc:true,
        table:"1.Product Overview \n 2.Research Methodology & Scope \n3.Executive Summary	 \n 4.Impact of COVID-19 <br>/5.Consumer Behavioral Analysis  \n 6.Market Dynamics \n 6.1.Drivers \n  6.2.Restraints \n   6.3.Opportunities \n    6.4.Challenges \n 7.	Market Trends & Developments \n 8.Premium Insights \n   8.1.Global XXX Market- Supply Chain Analysis \n 8.2.	Global XXX Market- Pricing Analysis \n9.	Global XXXMarket Outlook \n 9.1.	Market Size & Forecast \n 9.1.1.	By Type (2016-2026) \n 9.1.2.By Volume (2016-2026) \n 9.1.3.By Price (2016-2026) \n 9.2.Market Share & Forecast \n  9.2.1.	y Type (2016-2026) \n 9.2.2.	By Application (2016-2026) \n9.2.3.	By End-User (2016-2026) \n9.2.4.	By Region (2016-2026) \n9.2.5.By Company Share Analysis (2020)...   \n 10.	North America XXXMarket Outlook \n 10.1.	North America XXXMarket Analysis \n  10.1.1.	North America XXXMarket (Volume and Value), 2016-2026 \n10.1.2.	North America XXX Market (Price), 2016-2026 \n  10.2.	North America XXXMarket byType,2016-2026 \n  10.3.	North America XXX Market by Application,2016-2026 \n  10.4.	North America XXX Market by End-User,2016-2026 \n10.5.North America XXXMarket by Country, 2016-2026 \n10.5.1.	U.S. XXXMarket (Volume and Value), 2016-2026 \n10.5.2.	Canada XXXMarket (Volume and Value), 2016-2026 \n10.5.3.	Mexico XXXMarket (Volume and Value), 2016-2026 \n"
    },
      ])
      
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;