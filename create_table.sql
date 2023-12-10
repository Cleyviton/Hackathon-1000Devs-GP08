CREATE TABLE IF NOT EXISTS POSTO (
          id SERIAL PRIMARY key,
          nome varchar (255),
          endereco VARCHAR(255),
          id_rede INT,
          FOREIGN KEY (id_rede) REFERENCES REDE(id_rede)
  );
        
select * from POSTO;
