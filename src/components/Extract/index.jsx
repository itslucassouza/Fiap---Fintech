import { ContentInfos, DateContent, Extractcontent, ExtractInfos, LeftInfos, RightContent } from "./styles";

const fakeInfos = [
    {
        title: 'Desenvolvimento de site',
        valor: '12.000,00',
        type: 'vendas',
        entryType: 'entrada',
        date: '13/04/2021'
    },
    {
        title: 'Desenvolvimento de site',
        valor: '12.000,00',
        type: 'vendas',
        entryType: 'saída',
        date: '13/04/2021'
    },
    {
        title: 'Desenvolvimento de site',
        valor: '12.000,00',
        type: 'vendas',
        entryType: 'entrada',
        date: '13/04/2021'
    },
]


 export function ExtractContentInfos(item) {

     return (
         <ContentInfos>
             <p>{item.item.title}</p>
             <p>R$ {item.item.valor}</p>

             <DateContent>
                 <p>{item.item.type}</p>
                 <p>{item.item.date}</p>
             </DateContent>
         </ContentInfos>
     )
 }


export function Extract() {
    return(
        <Extractcontent>
            <ExtractInfos>
                <LeftInfos>
                    <p>Entradas</p>
                    <p>$10,987</p>
                </LeftInfos>
                <RightContent>
                    <p>Saídas</p>
                    <p>$20,00</p>
                </RightContent>
            </ExtractInfos>

            {fakeInfos.map((item) => {
                return (
                    <ExtractContentInfos item={item} />
                )
            })}

        </Extractcontent>
    )
}