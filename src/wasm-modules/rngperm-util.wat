(module
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32 i32 i32)))
 (import "e" "m" (memory $mimport$0 0))
 (export "g" (func $generatePerm))
 (export "i" (func $invertPerm))
 (export "c" (func $coordArray))
 (func $generatePerm (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$1
   (br_if $label$1
    (i32.eqz
     (local.get $2)
    )
   )
   (if
    (i32.ge_u
     (i32.sub
      (local.get $2)
      (i32.const 1)
     )
     (i32.const 7)
    )
    (block
     (local.set $7
      (i32.and
       (local.get $2)
       (i32.const -8)
      )
     )
     (loop $label$3
      (i32.store
       (i32.add
        (local.get $1)
        (i32.shl
         (local.get $3)
         (i32.const 2)
        )
       )
       (local.get $3)
      )
      (i32.store
       (i32.add
        (local.get $1)
        (i32.shl
         (local.tee $4
          (i32.or
           (local.get $3)
           (i32.const 1)
          )
         )
         (i32.const 2)
        )
       )
       (local.get $4)
      )
      (i32.store
       (i32.add
        (local.get $1)
        (i32.shl
         (local.tee $4
          (i32.or
           (local.get $3)
           (i32.const 2)
          )
         )
         (i32.const 2)
        )
       )
       (local.get $4)
      )
      (i32.store
       (i32.add
        (local.get $1)
        (i32.shl
         (local.tee $4
          (i32.or
           (local.get $3)
           (i32.const 3)
          )
         )
         (i32.const 2)
        )
       )
       (local.get $4)
      )
      (i32.store
       (i32.add
        (local.get $1)
        (i32.shl
         (local.tee $4
          (i32.or
           (local.get $3)
           (i32.const 4)
          )
         )
         (i32.const 2)
        )
       )
       (local.get $4)
      )
      (i32.store
       (i32.add
        (local.get $1)
        (i32.shl
         (local.tee $4
          (i32.or
           (local.get $3)
           (i32.const 5)
          )
         )
         (i32.const 2)
        )
       )
       (local.get $4)
      )
      (i32.store
       (i32.add
        (local.get $1)
        (i32.shl
         (local.tee $4
          (i32.or
           (local.get $3)
           (i32.const 6)
          )
         )
         (i32.const 2)
        )
       )
       (local.get $4)
      )
      (i32.store
       (i32.add
        (local.get $1)
        (i32.shl
         (local.tee $4
          (i32.or
           (local.get $3)
           (i32.const 7)
          )
         )
         (i32.const 2)
        )
       )
       (local.get $4)
      )
      (local.set $3
       (i32.add
        (local.get $3)
        (i32.const 8)
       )
      )
      (br_if $label$3
       (i32.ne
        (local.tee $5
         (i32.add
          (local.get $5)
          (i32.const 8)
         )
        )
        (local.get $7)
       )
      )
     )
    )
   )
   (if
    (local.tee $5
     (i32.and
      (local.get $2)
      (i32.const 7)
     )
    )
    (loop $label$5
     (i32.store
      (i32.add
       (local.get $1)
       (i32.shl
        (local.get $3)
        (i32.const 2)
       )
      )
      (local.get $3)
     )
     (local.set $3
      (i32.add
       (local.get $3)
       (i32.const 1)
      )
     )
     (br_if $label$5
      (i32.ne
       (local.tee $6
        (i32.add
         (local.get $6)
         (i32.const 1)
        )
       )
       (local.get $5)
      )
     )
    )
   )
   (br_if $label$1
    (i32.lt_s
     (local.tee $5
      (i32.sub
       (local.get $2)
       (i32.const 1)
      )
     )
     (i32.const 0)
    )
   )
   (loop $label$6
    (i32.store offset=4
     (local.get $0)
     (i32.xor
      (local.tee $7
       (i32.xor
        (local.tee $6
         (i32.load
          (local.get $0)
         )
        )
        (i32.load offset=8
         (local.get $0)
        )
       )
      )
      (local.tee $3
       (i32.load offset=4
        (local.get $0)
       )
      )
     )
    )
    (i32.store offset=12
     (local.get $0)
     (i32.rotl
      (local.tee $4
       (i32.xor
        (local.get $3)
        (i32.load offset=12
         (local.get $0)
        )
       )
      )
      (i32.const 11)
     )
    )
    (i32.store offset=8
     (local.get $0)
     (i32.xor
      (local.get $7)
      (i32.shl
       (local.get $3)
       (i32.const 9)
      )
     )
    )
    (i32.store
     (local.get $0)
     (i32.xor
      (local.get $4)
      (local.get $6)
     )
    )
    (local.set $7
     (i32.load
      (local.tee $5
       (i32.add
        (local.get $1)
        (i32.shl
         (local.tee $3
          (local.get $5)
         )
         (i32.const 2)
        )
       )
      )
     )
    )
    (i32.store
     (local.get $5)
     (i32.load
      (local.tee $2
       (i32.add
        (local.get $1)
        (i32.shl
         (i32.rem_u
          (i32.mul
           (i32.rotl
            (i32.mul
             (local.get $6)
             (i32.const 5)
            )
            (i32.const 7)
           )
           (i32.const 9)
          )
          (local.get $2)
         )
         (i32.const 2)
        )
       )
      )
     )
    )
    (i32.store
     (local.get $2)
     (local.get $7)
    )
    (local.set $5
     (i32.sub
      (local.get $3)
      (i32.const 1)
     )
    )
    (br_if $label$6
     (i32.gt_s
      (local.tee $2
       (local.get $3)
      )
      (i32.const 0)
     )
    )
   )
  )
 )
 (func $invertPerm (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (if
   (local.get $1)
   (loop $label$2
    (local.set $3
     (local.tee $4
      (i32.load
       (i32.add
        (local.get $0)
        (i32.shl
         (local.get $2)
         (i32.const 2)
        )
       )
      )
     )
    )
    (block $label$3
     (if
      (i32.ne
       (local.get $2)
       (local.get $4)
      )
      (loop $label$5
       (br_if $label$3
        (i32.ge_u
         (local.get $2)
         (local.get $3)
        )
       )
       (br_if $label$5
        (i32.ne
         (local.tee $3
          (i32.load
           (i32.add
            (local.get $0)
            (i32.shl
             (local.get $3)
             (i32.const 2)
            )
           )
          )
         )
         (local.get $2)
        )
       )
      )
     )
     (local.set $3
      (local.get $2)
     )
     (loop $label$6
      (local.set $6
       (i32.load
        (local.tee $5
         (i32.add
          (local.get $0)
          (i32.shl
           (local.get $4)
           (i32.const 2)
          )
         )
        )
       )
      )
      (i32.store
       (local.get $5)
       (local.get $3)
      )
      (local.set $5
       (i32.ne
        (local.get $2)
        (local.get $4)
       )
      )
      (local.set $3
       (local.get $4)
      )
      (local.set $4
       (local.get $6)
      )
      (br_if $label$6
       (local.get $5)
      )
     )
    )
    (br_if $label$2
     (i32.ne
      (local.tee $2
       (i32.add
        (local.get $2)
        (i32.const 1)
       )
      )
      (local.get $1)
     )
    )
   )
  )
 )
 (func $coordArray (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 f32)
  (local $10 f32)
  (local $11 f32)
  (local $12 f32)
  (local $13 f32)
  (local $14 f32)
  (local $15 f32)
  (local $16 f32)
  (local $17 f32)
  (local $18 f32)
  (local $19 f32)
  (local $20 f32)
  (local $21 f32)
  (local $22 f32)
  (local $23 f32)
  (local $24 f32)
  (if
   (local.tee $8
    (i32.mul
     (local.tee $6
      (i32.shr_u
       (local.get $3)
       (i32.const 4)
      )
     )
     (local.tee $7
      (i32.shr_u
       (local.get $2)
       (i32.const 4)
      )
     )
    )
   )
   (block
    (local.set $21
     (f32.mul
      (f32.div
       (f32.const 1)
       (local.tee $20
        (f32.convert_i32_u
         (local.get $6)
        )
       )
      )
      (local.tee $15
       (f32.convert_i32_u
        (local.get $1)
       )
      )
     )
    )
    (local.set $23
     (f32.mul
      (f32.div
       (f32.const 1)
       (local.tee $22
        (f32.convert_i32_u
         (local.get $7)
        )
       )
      )
      (local.tee $16
       (f32.convert_i32_u
        (local.get $0)
       )
      )
     )
    )
    (local.set $17
     (f32.convert_i32_u
      (local.get $3)
     )
    )
    (local.set $18
     (f32.convert_i32_u
      (local.get $2)
     )
    )
    (local.set $1
     (i32.const 0)
    )
    (local.set $0
     (i32.const 0)
    )
    (loop $label$2
     (f32.store
      (local.tee $2
       (i32.add
        (local.get $5)
        (local.tee $3
         (i32.shl
          (local.get $0)
          (i32.const 2)
         )
        )
       )
      )
      (local.tee $12
       (f32.add
        (f32.add
         (local.tee $12
          (f32.div
           (local.tee $9
            (f32.convert_i32_u
             (i32.shl
              (i32.sub
               (local.tee $6
                (i32.load
                 (i32.add
                  (local.get $4)
                  (i32.shl
                   (local.get $1)
                   (i32.const 2)
                  )
                 )
                )
               )
               (i32.mul
                (local.tee $6
                 (i32.div_u
                  (local.get $6)
                  (local.get $7)
                 )
                )
                (local.get $7)
               )
              )
              (i32.const 4)
             )
            )
           )
           (local.get $18)
          )
         )
         (local.get $12)
        )
        (f32.const -1)
       )
      )
     )
     (f32.store
      (i32.add
       (local.get $5)
       (i32.or
        (local.get $3)
        (i32.const 4)
       )
      )
      (local.tee $13
       (f32.sub
        (f32.const 1)
        (f32.add
         (local.tee $13
          (f32.div
           (local.tee $10
            (f32.convert_i32_u
             (i32.shl
              (local.get $6)
              (i32.const 4)
             )
            )
           )
           (local.get $17)
          )
         )
         (local.get $13)
        )
       )
      )
     )
     (f32.store
      (i32.add
       (local.get $5)
       (i32.or
        (local.get $3)
        (i32.const 8)
       )
      )
      (local.tee $19
       (f32.div
        (local.tee $14
         (f32.mul
          (f32.div
           (f32.convert_i32_u
            (i32.sub
             (local.get $1)
             (i32.mul
              (local.tee $6
               (i32.div_u
                (local.get $1)
                (local.get $7)
               )
              )
              (local.get $7)
             )
            )
           )
           (local.get $22)
          )
          (local.get $16)
         )
        )
        (local.get $16)
       )
      )
     )
     (f32.store
      (i32.add
       (local.get $5)
       (i32.or
        (local.get $3)
        (i32.const 12)
       )
      )
      (local.tee $11
       (f32.div
        (local.tee $24
         (f32.mul
          (f32.div
           (f32.convert_i32_u
            (local.get $6)
           )
           (local.get $20)
          )
          (local.get $15)
         )
        )
        (local.get $15)
       )
      )
     )
     (f32.store
      (i32.add
       (local.get $5)
       (i32.or
        (local.get $3)
        (i32.const 16)
       )
      )
      (local.tee $9
       (f32.add
        (f32.add
         (local.tee $9
          (f32.div
           (f32.add
            (local.get $9)
            (f32.const 16)
           )
           (local.get $18)
          )
         )
         (local.get $9)
        )
        (f32.const -1)
       )
      )
     )
     (f32.store
      (i32.add
       (local.get $5)
       (i32.or
        (local.get $3)
        (i32.const 20)
       )
      )
      (local.get $13)
     )
     (f32.store
      (i32.add
       (local.get $5)
       (i32.or
        (local.get $3)
        (i32.const 24)
       )
      )
      (local.tee $14
       (f32.div
        (f32.add
         (local.get $23)
         (local.get $14)
        )
        (local.get $16)
       )
      )
     )
     (f32.store
      (i32.add
       (local.get $5)
       (i32.or
        (local.get $3)
        (i32.const 28)
       )
      )
      (local.get $11)
     )
     (f32.store offset=84
      (local.get $2)
      (local.tee $10
       (f32.sub
        (f32.const 1)
        (f32.add
         (local.tee $10
          (f32.div
           (f32.add
            (local.get $10)
            (f32.const 16)
           )
           (local.get $17)
          )
         )
         (local.get $10)
        )
       )
      )
     )
     (f32.store offset=80
      (local.get $2)
      (local.get $12)
     )
     (f32.store offset=76
      (local.get $2)
      (local.get $11)
     )
     (f32.store offset=72
      (local.get $2)
      (local.get $14)
     )
     (f32.store
      (i32.sub
       (local.get $2)
       (i32.const -64)
      )
      (local.get $9)
     )
     (f32.store offset=60
      (local.get $2)
      (local.tee $11
       (f32.div
        (f32.add
         (local.get $21)
         (local.get $24)
        )
        (local.get $15)
       )
      )
     )
     (f32.store offset=56
      (local.get $2)
      (local.get $14)
     )
     (f32.store offset=52
      (local.get $2)
      (local.get $10)
     )
     (f32.store offset=48
      (local.get $2)
      (local.get $9)
     )
     (f32.store offset=44
      (local.get $2)
      (local.get $11)
     )
     (f32.store offset=40
      (local.get $2)
      (local.get $19)
     )
     (f32.store offset=36
      (local.get $2)
      (local.get $10)
     )
     (f32.store offset=88
      (local.get $2)
      (local.get $19)
     )
     (f32.store offset=92
      (local.get $2)
      (local.get $11)
     )
     (f32.store offset=32
      (local.get $2)
      (local.get $12)
     )
     (f32.store offset=68
      (local.get $2)
      (local.get $13)
     )
     (local.set $0
      (i32.add
       (local.get $0)
       (i32.const 24)
      )
     )
     (br_if $label$2
      (i32.ne
       (local.tee $1
        (i32.add
         (local.get $1)
         (i32.const 1)
        )
       )
       (local.get $8)
      )
     )
    )
   )
  )
 )
)
