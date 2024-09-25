"use client";

// import Image from "next/image";
import styles from "../../../page.module.css";
import React, {useState} from 'react';

export default function Categoria() {
    
    return (
        <div className={styles.categorias}>
            <form>
                <input type="text" placeholder="Nova Categoria" name="nova_categoria"/>
                <button type="button">Adicionar Categoria</button>
                <table border={1}>
                    {/*Personalizar estilo da lista de categorias*/}
                    <thead>
                        <tr>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Equipamentos</td>
                        </tr>
                        <tr>
                            <td>Ferramentas</td>
                        </tr>
                        <tr>
                            <td>Acessórios</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}