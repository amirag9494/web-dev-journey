def hanoi_solver(n):
    rods = [list(range(n, 0, -1)), [], []]
    states = [f"{rods[0]} {rods[1]} {rods[2]}"]

    def move(k, source, target, aux):
        if k == 0:
            return
        # انتقال k - 1 دیسک از میله مبدا به میله کمکی
        move(k - 1, source, aux, target)
        
        # انتقال بزرگ‌ترین دیسک فعلی به میله مقصد
        disk = rods[source].pop()
        rods[target].append(disk)
        states.append(f"{rods[0]} {rods[1]} {rods[2]}")
        
        # انتقال k - 1 دیسک از میله کمکی به میله مقصد
        move(k - 1, aux, target, source)

    move(n, 0, 2, 1)
    return "\n".join(states)