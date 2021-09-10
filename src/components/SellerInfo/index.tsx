import React from 'react';
import {
    Container,
    Title,
    LocationCard,
    LocationIcon,
    ReputationCard,
    ReputationThemometer,
    ReputationRow,
    SupportIcon,
    ClockIcon,
    More,
} from './styles';

const SellerInfo: React.FC = () => {
    return (
        <Container>
            <Title>Informações sobre o vendedor</Title>

            <LocationCard>
                <LocationIcon />

                <div>
                    <p>Localização</p>
                    <strong>Jundiaí - SP</strong>  
                </div>
             </LocationCard>

             <ReputationCard>
                 <ReputationThemometer>
                     <li />
                     <li />
                     <li />
                     <li />
                     <li className="active" />

                 </ReputationThemometer>
                 
                 <ReputationRow>
                    <div>
                        <strong>561</strong>
                        <span>vendas nos últimos 4 meses</span>
                    </div>
                    <div>
                        <strong><SupportIcon /></strong>
                        <span>Presta um bom atendimento</span>
                    </div>
                    <div>
                        <strong><ClockIcon /></strong>
                        <span>vendas nos últimos 4 meses</span>
                    </div>
                 </ReputationRow>
             </ReputationCard>

             <More href="#">Ver mais dados do vendedor</More>
        </Container>
    )
}

export default SellerInfo;