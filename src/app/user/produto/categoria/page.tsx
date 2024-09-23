"use client";

// import Image from "next/image";
import styles from "../../../page.module.css";
import React, {useState} from 'react';

export default function Categoria() {
    
    return (
        <div className={styles.categorias}>
            <form>
                <input type="text" name="" id="" />
                <button type="button"></button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}