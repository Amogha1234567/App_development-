package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Assignment;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}