import React, { useState } from 'react'
import './Popular.scss'
import PopularItem from './PopularItem'
const Popular = () => {
    const [pItem, setpItem] = useState([
        {
            _id: 1,
            img_url: 'https://s3-alpha-sig.figma.com/img/3150/cf77/400b14c91f0f282d68b1d15e9fbb2814?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdkP0F-beJ9uXAwMJWJtbbkxa~uvEtmkzZA6b-UoyJIGFaxpyXIVdUt~yn1aIoHOfipMqApWa6Lxpjm7Eh7K-U2hM5cM5kec6nif1aktpaMzCssh2Y5t42WYpHMknWEabQeoR84a3Cv66UkLSb-JUmKEoxiAFiz4byVVxZrsgWfkNX0wAbKLChrzEysPUFZ0nMgpJ~JFaAgJBvtkfFOcOVlFJ86wtgxwB7~i9pfhFySO76vmnItGjSvFH-jcZbPwUE-oGkqh~JFRGl81Ty2WHiRHaacPynk3lLFWiCBttFbco~rFXZnBKuNHhc548HMLRHZwrfLFn1oxlnjpCvnseQ__',
            address: "London NW8 J7T England",
            name: "The Resident Saho",
            price: "1223.00",
            rating: 4.5
        },
        {
            _id: 2,
            img_url: "https://s3-alpha-sig.figma.com/img/bd52/0857/688034f6c61957c90ca994f1f53f90ba?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W4ryxAstqUIZC4hfm~NhI2VgVMK9~IiZ9P6T5Pg5LTlPBeTobgeuqUAoW51DVDvf0JAV9-AvRHlfzcT9DN7Wu8bRmlVjLCWd2o5vAADKkcy6onaFLY~VF9~pH7Bbpqp2r5mpoe7DF4rvL2AjqGWyrBlvZYhM3HTkN1NIcIZvugYHT1gvdQMDzEqKIx2ug0L1~3qhjDqnPkdZe4-TIPffpjy10zIjzoHvr1FIyeS2MYFqlcmSynMcsgP7tc4VS3Gco2l~RlwCRq6NyAVXiddRdA6MoGzHwTVoqWe-GZv3YOLK5vyzab-4rm9NTEbTxQN52A1VDd5Jj0J5itf0dImq7Q__",
            address: "London NW8 J7T England",
            name: "The Resident Saho",
            price: "1223.00",
            rating: 4.3
        },
        {
            _id: 3,
            img_url: "https://s3-alpha-sig.figma.com/img/32c1/e36a/ee62a48039f2974e1adfd3400f9a792e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tw5iFHXNBuLD2ywUBIYqtBJyHIclSILpLLqM4LBX1TWmZFV~UifGWRLHKVXAa99PN2gH8ccC~xfn8OPU5Q7a~rHmjXY~YpO6lNjTmE~iw90nfhlq8aLCjp3t6luRsGGeOtth-s0nRhMkIAdCoFqKEzH7XPTGlrr~-C8w9cT3~imeBOAvbcEBjelccCHLyYcDyAAlIDV45quk2ZzCFQapPjeUejApxAIa713Z6uRNa0lF715b4n1R6FP6FeGVdhthNm7p2YzyS2vBOLY4x8PruPMdA6nSd01TwQklLV-j8LklMklDq9A6qLyIiG0E656IJoeCoiaOobdZJ1c6kb~tAw__",
            address: "London NW8 J7T England",
            name: "The Resident Saho",
            price: "1223.00",
            rating: 4.3
        }
    ])

    return (
        <section className='popular-header'>
            <h1 className='header'>Our Most Popular Hotels</h1>
            <div className="text">
                <div className="innertext">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nihil libero aperiam doloribus temporibus? Asperiores reiciendis mollitia voluptate quibusdam omnis, necessitatibus, nulla id, esse magnam at eveniet perferendis magni corrupti.
                </div>
                <button className="view-btn">View All</button>
            </div>
            <div className="item">
                {pItem.map((item) => { return <PopularItem key={item._id} item={item} /> })}
            </div>
        </section>
    )
}

export default Popular
