import React from 'react';
import SellerInfo from '../SellerInfo';
//import tshirtImage from '../../assets/tshirt.png';

import { 
    Container, 
    Row, 
    Panel, 
    Column, 
    Gallery, 
    Section, 
    Description,  
} from './styles';

const Product: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img alt="T-Shirt" src="tshirt.png" />
                    </Gallery>

                    <Info />
                </Column>

                <Column>                
                {/*<ProductionAction /> */}
                <SellerInfo />
                <WarrantySection />
                <WarrantySection />
                <WarrantySection />
                </Column>



            </Panel>

        </Container>    
        
        )
}

const WarrantySection = () => (
    <Section>
        <h4>Garantias</h4>

        <div>
            <span>
                <p className="title">Compra garantida com Lorem Ipsum</p>
                <p className="description">
                    Receba o produto que está esperando ou devolvemos o seu dinheiro
                </p>
            </span>
            <span>
                <p className="title">Garantia do Vendedor</p>
                <p className="description">
                     Sem garantia
                </p>
            </span>
        </div>
    </Section>
)
const Info = () => (
    <Description>
        <h2>Descrição</h2>

        <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Et 
            quia eveniet porro doloremque ipsum e
            st! Excepturi veniam blanditiis quia 
            dignissimos dolores, alias consequunt
            ur possimus commodi ipsam consectetur 
            odit dolore impedit.
            <br />
            <br />
            Itens inclusos: <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            <br />
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Expedita ea eligen
             di dignissimos et deserunt laboriosam
              itaque autem beatae. Quas esse labor
              e ipsam tempore officia, libero excep
              turi hic at dolores inventore.
        </p>
    </Description>
)
export default Product;