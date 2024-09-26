"use client";

import Image from "next/image";
import styles from "../../../page.module.css";
import React, {useState} from 'react';

export default function Categoria() {
    
    return (
        <div className={styles.categorias}>
            <form>
                <input type="text" placeholder="Nova Categoria" name="nova_categoria"/>
                <button type="button">Adicionar Categoria</button>
                <table>
                    <thead>
                        <tr>
                            <Image src={"/images/icone_plus.png"} alt={"add"} width={20} height={20} priority/>
                            <th>Categorias</th>
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