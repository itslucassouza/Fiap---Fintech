import { HeaderContent, LeftContent, MidContent, RightContent } from "./styles"
import {BiMenuAltRight } from 'react-icons/bi'

export function Header({handleOpenMenu}) {
    return (
        <HeaderContent>
            <LeftContent>
                <p>Bom dia,</p>
                <p>Lucas</p>
            </LeftContent>
            <MidContent>
                Extrato
            </MidContent>
            <RightContent >
                <BiMenuAltRight size={52} onClick={handleOpenMenu} />
            </RightContent>
        </HeaderContent>
    )
}