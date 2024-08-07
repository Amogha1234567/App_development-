package com.example.demo.Repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Register;

@Repository
public interface RegisterRepository extends CrudRepository<Register, Long> {
}
