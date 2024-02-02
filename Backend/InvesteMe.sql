PGDMP     -    *                |         	   InvesteMe    15.4    15.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    49152 	   InvesteMe    DATABASE     �   CREATE DATABASE "InvesteMe" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "InvesteMe";
                postgres    false            �            1259    49262    conta    TABLE     �   CREATE TABLE public.conta (
    contaid character varying(255),
    userid character varying(255),
    proprietario character varying(255),
    numero character varying(255),
    saldo double precision
);
    DROP TABLE public.conta;
       public         heap    postgres    false            �            1259    49276 	   pagamento    TABLE        CREATE TABLE public.pagamento (
    pagamentoid character varying(255),
    proprietario character varying(255),
    contaid character varying(255),
    valor double precision,
    moeda character varying(10),
    descricao character varying(255),
    data timestamp without time zone
);
    DROP TABLE public.pagamento;
       public         heap    postgres    false            �            1259    49301    transferencia    TABLE     
  CREATE TABLE public.transferencia (
    transferenciaid character varying(255),
    proprietario character varying(255),
    contaid character varying(255),
    destinatario character varying(255),
    valor double precision,
    data timestamp without time zone
);
 !   DROP TABLE public.transferencia;
       public         heap    postgres    false            �            1259    49189    user    TABLE     �   CREATE TABLE public."user" (
    id character varying(255),
    nome character varying(255),
    email character varying(255),
    password character varying(255)
);
    DROP TABLE public."user";
       public         heap    postgres    false            
          0    49262    conta 
   TABLE DATA           M   COPY public.conta (contaid, userid, proprietario, numero, saldo) FROM stdin;
    public          postgres    false    215   �                 0    49276 	   pagamento 
   TABLE DATA           f   COPY public.pagamento (pagamentoid, proprietario, contaid, valor, moeda, descricao, data) FROM stdin;
    public          postgres    false    216   �                 0    49301    transferencia 
   TABLE DATA           j   COPY public.transferencia (transferenciaid, proprietario, contaid, destinatario, valor, data) FROM stdin;
    public          postgres    false    217   4       	          0    49189    user 
   TABLE DATA           ;   COPY public."user" (id, nome, email, password) FROM stdin;
    public          postgres    false    214   �       s           2606    49270    conta conta_numero_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_numero_key UNIQUE (numero);
 @   ALTER TABLE ONLY public.conta DROP CONSTRAINT conta_numero_key;
       public            postgres    false    215            u           2606    49268    conta conta_userid_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_userid_key UNIQUE (userid);
 @   ALTER TABLE ONLY public.conta DROP CONSTRAINT conta_userid_key;
       public            postgres    false    215            q           2606    49195    user user_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_key;
       public            postgres    false    214            v           2606    49271    conta conta_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_userid_fkey FOREIGN KEY (userid) REFERENCES public."user"(email) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.conta DROP CONSTRAINT conta_userid_fkey;
       public          postgres    false    215    3185    214            w           2606    49286     pagamento pagamento_contaid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pagamento
    ADD CONSTRAINT pagamento_contaid_fkey FOREIGN KEY (contaid) REFERENCES public.conta(numero) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.pagamento DROP CONSTRAINT pagamento_contaid_fkey;
       public          postgres    false    215    3187    216            x           2606    49281    pagamento pagamento_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pagamento
    ADD CONSTRAINT pagamento_userid_fkey FOREIGN KEY (proprietario) REFERENCES public."user"(email) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.pagamento DROP CONSTRAINT pagamento_userid_fkey;
       public          postgres    false    214    216    3185            y           2606    49311 (   transferencia transferencia_contaid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.transferencia
    ADD CONSTRAINT transferencia_contaid_fkey FOREIGN KEY (contaid) REFERENCES public.conta(numero) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.transferencia DROP CONSTRAINT transferencia_contaid_fkey;
       public          postgres    false    217    3187    215            z           2606    49306 '   transferencia transferencia_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.transferencia
    ADD CONSTRAINT transferencia_userid_fkey FOREIGN KEY (proprietario) REFERENCES public."user"(email) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.transferencia DROP CONSTRAINT transferencia_userid_fkey;
       public          postgres    false    214    3185    217            
   �   x�e��j�0�����X��]�t�w�F�(r)-3зo�l]�8뚒� c�TZ)Z!�"���F���ܷI_�U��Z�ս.���~�=�s���H��E�!{�l�CSA �yDL֪D�����y[��fuc&���ȳ�|XA�$�
�CY
�>&6���͏�������6���w��-cL�H������wߌ��d�����'/��{�q��1�ZF         �   x���M�0 ���+�����)B�� �&�p�d���D��?�;�m����>�"���C]疸�9�t�۶!A,��P:2�h  C_�+�1d~�� �f ��DD�6\Śv��⿒}z\�y�_b��{V ���ϣ ���H���� 
�9X         �   x�m�A� @�5���a�0]i��;��R�&m1�4��ֵ&�ՌR)C�#%WA�*g+��F5<�Ӛ��mUN<��#�궧�tm�M����
-X<:Y�}���zIx�3 D�T�>JrHE���/Ա�,�9�v���#���Fk�[4'      	   �  x�m�Mw�@F��+\d;��a`fWA4MT�n����D���zڥ�=����cYH1W���ERqE� C�1�7���Ȓ����^֍�?��Q�}x��7�~$^��H�yX�ˊ����fg~�ο�S��W˶]����D+��Vy �b��4��"���Ѣ��=4#K˦o����n�|LR��°,����e�%񲄥�×b|��GqL[w����J�m,���Hh�y�8�}P�)�)#��kS��z��C<�!ԉL�$z_�Yj.}���4{9G�|��Wf�Oj����Dl�
I)x���G��U��8b�}��todk���B����r���Y���HǁZ�&v�]�vb��:/�[��gx���ɠp�=_�C=�=�d@|�<����Hr.#V*�.mE��M-o����7?�����Ѫ�W�}t���_�z�
ly��F�l�^_�(L%�;�m��z��     