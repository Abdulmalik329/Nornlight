import styled from "styled-components";
import { bgColors, textColors } from "../../../../theme";

export const NavMainWrapper = styled.div`
    display: flex;
    gap: 30px;
`;

export const SearchWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;

    .catalog-button {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 50px;
        padding: 14px 28px;
        border-radius: 100px;
        background-color: ${bgColors.primary};
        border: none;
        color: ${textColors.white};
        font-size: 16px;
        font-weight: 600;
    }

    .input-wrapper {
        position: relative;
        width: 100%;
        border: 1px solid ${bgColors.primary};
        border-radius: 100px;
        overflow: hidden;
    }

    & input {
        width: 100%;
        height: 50px;
        padding: 14px 48px 14px 24px;
        border-radius: 100px;
        border: none;
        outline: none;
    }

    .search-icon-wrap {
        position: absolute;
        right: 24px;
        top: 14px;
    }
`;

export const NavigationItems = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;

    .item {
        text-align: center;
    }
`;
