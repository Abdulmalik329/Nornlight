import styled from "styled-components";

export const Product_Lampa = styled.div`
    display: flex;
    margin-top: 48px;
    gap: 56px;

    & h1{
        font-weight: 500;
        color: #454545;
        font-size: 40px;
        line-height: 110%;
    }

    .product_text{
        padding: 40px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .p2{
            padding: 12px 0;
        }

        .p1, .p2{
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            color: #b3b3b3;
        }

        .p3{
            color: #4d932c;
        }
    }


    .product_skidka{
        display: flex; 
        align-items: flex-end;
        gap: 10px;
    }
    .current-price {
        font-size: 24px;
        font-weight: bold;
        font-weight: 500;
        font-size: 40px;
        line-height: 160%;
        letter-spacing: 0.01em;
        color: #101010;
}

    .old-price {
        color: #999;
        text-decoration: line-through; 
        margin-bottom: 2px; 
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0.01em;
    }


    .product_text_p{
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: #4c4c4c;
        padding: 40px 0 48px 0;
    }

    .product_actions {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    /* Miqdor bloki (minus, raqam, plyus) */
    .quantity_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #E5E5E5;
        border-radius: 8px;
        width: 130px;
        height: 56px;
        padding: 0 15px;

        button {
            background: none;
            border: none;
            font-size: 24px;
            color: #101010;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.6;
            }
        }

        span {
            font-weight: 500;
            font-size: 18px;
            color: #101010;
        }
    }

    .add_to_cart_btn {
        background: #333333;
        color: #FFFFFF;
        border: none;
        border-radius: 8px;
        padding: 0 40px;
        height: 56px;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
            background: #505050;
        }
    }

    /* Yurakcha tugmasi */
    .heart_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        background: #F8F8F8;
        border-radius: 8px;
        cursor: pointer;
        color: #101010;
        border: none;
        transition: background 0.2s;

        &:hover {
            background: #f0f0f0;
        }

        svg {
            width: 24px;
            height: 24px;
        }
    }
`


