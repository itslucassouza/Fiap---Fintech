import { ContentInfos, DateContent, Extractcontent, ExtractInfos, LeftInfos, RightContent } from "./styles";

const fakeInfos = [
    {
        title: 'Desenvolvimento de site',
        valor: '12.000,00',
        type: 'vendas',
        entryType: 'entrada',
        date: '13/04/2021',
        positive: true
    },
    {
        title: 'Desenvolvimento de site',
        valor: '12.000,00',
        type: 'vendas',
        entryType: 'saída',
        date: '13/04/2021',
        positive: false

    },
    {
        title: 'Desenvolvimento de site',
        valor: '12.000,00',
        type: 'vendas',
        entryType: 'entrada',
        date: '13/04/2021',
        positive: true
    },
]


 export function ExtractContentInfos(item) {
    

     return (
         <ContentInfos>
             <p>{item.item.title}</p>
             <p style={item.item.positive ? { color: "rgb(0, 210, 0)" } : { color: "red" }}>
                {item.item.positive ? (
                    <>
                    {item.item.valor}
                    </>
                ) : (
                    <>
                    - {item.item.valor}
                    </>
                )}
            </p>


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
                      <p style={{color: "rgb(0, 210, 0)" }}>
                      $10,987
                      </p>
                </LeftInfos>
                <RightContent>
                    <p>
                        Saídas
                    </p>
                    <p style={{color: "red" }}>$20,00</p>
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